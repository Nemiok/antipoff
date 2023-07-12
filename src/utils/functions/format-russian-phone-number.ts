function formatRussianPhoneNumber(input: string): string {
  const phoneNumberRegex = /(\+7|8)?(\d{3})(\d{2,3})(\d{2})(\d{2})/;
  const match = input.match(phoneNumberRegex);

  if (!match && input.length === 9) {
    return `+7 (8${input.slice(0, 2)}) ${input.slice(2, 5)}-${input.slice(5, 7)}-${input.slice(7)}`;
  }

  const [, countryCode, areaCode, digits1, digits2, digits3] = match || [];
  const formattedAreaCode = `(${areaCode || ''})`;
  const formattedCountryCode = countryCode || '+7';

  let formattedPhoneNumber = `${formattedCountryCode} ${formattedAreaCode} ${digits1?.length === 2 ? `${digits1}${digits2}-${digits3}` : `${digits1}-${digits2}-${digits3}`
    }`;

  return formattedPhoneNumber.trim();
}

export default formatRussianPhoneNumber