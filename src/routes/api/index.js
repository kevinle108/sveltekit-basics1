const x = 'something';

export const get = () => {
  return {
    body: {
      x: "something",
    }
  }
}

export const post = (request) => {
  const formBody = JSON.parse(request.body);
  const name = formBody.name;
  const email = formBody.email;
  console.log(name, email);
  return {
    body: {
      name,
      email,
    }
  }
}