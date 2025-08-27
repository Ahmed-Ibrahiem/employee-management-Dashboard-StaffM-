export async function getData() {
  try {
    const req = await fetch("employees.json");
    if (req.status === 200) {
      const res = await req.json();
      const data = await res;
      return data;
    } else {
      console.log("Fail");
    }
  } catch {
    return Error("Something Went Wrong In Server");
  }
}
