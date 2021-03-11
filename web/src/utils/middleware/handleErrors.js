export function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  if (response.status !== 204) return response.json();
}

export function handleThrowErrors(response) {
  throw Error("response");
}
