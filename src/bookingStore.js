// Bookings are kept per user in the browser (localStorage).
// Swap these three functions for API calls when you add a backend.
const keyFor = (email) => `tl_bookings_${String(email).toLowerCase()}`;

export function getBookings(email) {
  try {
    const raw = window.localStorage.getItem(keyFor(email));
    const list = raw ? JSON.parse(raw) : [];
    return Array.isArray(list) ? list : [];
  } catch (e) {
    return [];
  }
}

function save(email, list) {
  try {
    window.localStorage.setItem(keyFor(email), JSON.stringify(list));
    return true;
  } catch (e) {
    return false;
  }
}

export function addBooking(email, data) {
  const booking = {
    ...data,
    ref: 'TL-' + Math.random().toString(36).slice(2, 8).toUpperCase(),
    status: 'Confirmed',
    createdAt: new Date().toISOString(),
  };
  const ok = save(email, [booking, ...getBookings(email)]);
  return ok ? booking : null;
}

export function cancelBooking(email, ref) {
  const list = getBookings(email).map((b) =>
    b.ref === ref ? { ...b, status: 'Cancelled' } : b
  );
  save(email, list);
  return list;
}
