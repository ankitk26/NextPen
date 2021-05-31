export const getCssFrameworkLink = (framework) => {
  switch (framework) {
    case "bootstrap":
      return `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">`;

    case "tailwind":
      return `<link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">`;

    case "bulma":
      return `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css">`;

    case "materialize":
      return `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">`;

    default:
      return "none";
  }
};
