export const post = (request) => {
  const formBody = JSON.parse(request.body);
  const name = formBody.name;
  const email = formBody.email;
  console.log('contact.js', formBody)
  return {
    body: {
      name,
      email,
    }
  }
}