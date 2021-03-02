import Case from "../models/Case";

export async function getCases() {
  const response = await fetch("/api/case");
  const casesJson = await response.json();

  // casesJson.map((caseObject) => new Case(caseObject));

  // casesJson;
  // console.log(casesJson);
  console.log(casesJson.map((caseObject) => new Case(caseObject)));
  return casesJson.map((caseObject) => new Case(caseObject));
}

export async function saveCase(caseObject) {
  const response = await fetch(`/api/case`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(caseObject),
  });
  return await response.json();
}

export async function deleteCase(ID, dato) {
  const response = await fetch(`/api/case`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ID, dato }),
  });
  return await response.json();
}
