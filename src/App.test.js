import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './AuthContext';

const renderAt = (path) =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </MemoryRouter>
  );

beforeEach(() => {
  window.localStorage.clear();
  window.scrollTo = jest.fn();
});

test('home page shows packages and the navbar', () => {
  renderAt('/');
  expect(screen.getByText(/Popular handpicked packages/i)).toBeInTheDocument();
  expect(screen.getAllByRole('link', { name: 'Packages' }).length).toBeGreaterThan(0);
});

test('package detail page keeps the navbar and shows the itinerary', () => {
  renderAt('/package/thailand');
  expect(screen.getByRole('heading', { name: 'Journey through Thailand' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'My Bookings' })).toBeInTheDocument();
  expect(screen.getByText('Itinerary')).toBeInTheDocument();
});

test('booking requires login, then a package can be booked and appears in My Bookings', async () => {
  renderAt('/package/bhutan');
  fireEvent.click(screen.getAllByRole('button', { name: /Select & Book/i })[0]);

  // redirected to login
  expect(await screen.findByText(/Please log in to continue/i)).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: /Create an account/i }));

  fireEvent.change(await screen.findByLabelText('Full name'), { target: { value: 'Asha Rao' } });
  fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'asha@example.com' } });
  fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'secret12' } });
  fireEvent.change(screen.getByLabelText('Confirm password'), { target: { value: 'secret12' } });
  fireEvent.click(screen.getByRole('button', { name: /Create account/i }));

  // back on the booking page for the chosen package
  expect(await screen.findByText('Complete your booking')).toBeInTheDocument();
  fireEvent.change(screen.getByLabelText('Phone'), { target: { value: '9876543210' } });
  const future = new Date();
  future.setDate(future.getDate() + 30);
  const iso = `${future.getFullYear()}-${String(future.getMonth() + 1).padStart(2, '0')}-${String(future.getDate()).padStart(2, '0')}`;
  fireEvent.change(screen.getByLabelText('Preferred travel date'), { target: { value: iso } });
  fireEvent.click(screen.getByRole('button', { name: 'Increase Children' }));
  fireEvent.click(screen.getByRole('button', { name: /Confirm booking/i }));

  expect(await screen.findByText(/Booking confirmed/i)).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Bhutan hidden gems' })).toBeInTheDocument();

  // cancel flow
  fireEvent.click(screen.getByRole('button', { name: /Cancel booking/i }));
  fireEvent.click(screen.getByRole('button', { name: /Yes, cancel/i }));
  await waitFor(() => expect(screen.getByText('Cancelled')).toBeInTheDocument());

  // logout and log back in
  fireEvent.click(screen.getByRole('button', { name: 'Logout' }));
  expect(await screen.findByRole('link', { name: 'Login' })).toBeInTheDocument();
});

test('package search filters by country', () => {
  renderAt('/packages?country=Turkey');
  expect(screen.getByText("Journey Through Turkey's Legacy")).toBeInTheDocument();
  expect(screen.queryByText('Bhutan hidden gems')).not.toBeInTheDocument();
});

test('unknown country shows an empty state with working actions', () => {
  renderAt('/packages?country=Japan');
  expect(screen.getByText(/No packages found/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /View all packages/i })).toBeInTheDocument();
});
