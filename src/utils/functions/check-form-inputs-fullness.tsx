export const checkFormInputsFullness = (form: HTMLFormElement) => {
  let areInputsFull = true;
  form.querySelectorAll('input').forEach((input) => {

    if (input.value.length <= 0) areInputsFull = false

  })
  return areInputsFull
}