export async function getCases() {
  const response = await fetch("/api/case");
  return await response.json();
}

export async function createCase(body) {
  const response = await fetch(`/api/case`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  return await response.json();
}
