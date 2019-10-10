export async function fakeRequest(time, data = {}, answer = "success") {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.name === "Stas" || data.name === "Alexey") {
        resolve({ data: answer, ok: true });
      } else {
        reject({ error: "You shall not past!" });
      }
    }, time);
  });
}
