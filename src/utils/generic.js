export const generatePassword = async () => {
    const rules = {
      min_length: 6,
      must_have_number: true,
      has_special_character: true,
      must_have_alphabeth: true,
    };

    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    let chars = '';
    
    // Build character pool based on rules
    if (rules.must_have_alphabeth) chars += letters;
    if (rules.must_have_number) chars += numbers;
    if (rules.has_special_character) chars += specialChars;

    let generatedPassword = '';
    const length = Math.max(rules.min_length, 8); // Ensure minimum length

    // Generate initial password
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      generatedPassword += chars[randomIndex];
    }

    // Ensure at least one character from each required type
    if (rules.must_have_alphabeth) {
      const randomLetter = letters[Math.floor(Math.random() * letters.length)];
      generatedPassword = generatedPassword.slice(0, -1) + randomLetter;
    }
    if (rules.must_have_number) {
      const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
      generatedPassword = generatedPassword.slice(0, -2) + randomNumber + generatedPassword.slice(-1);
    }
    if (rules.has_special_character) {
      const randomSpecial = specialChars[Math.floor(Math.random() * specialChars.length)];
      generatedPassword = generatedPassword.slice(0, -3) + randomSpecial + generatedPassword.slice(-2);
    }

    // Shuffle the password to randomize character positions
    generatedPassword = generatedPassword
      .split('')
      .sort(() => Math.random() - 0.5)
      .join('');

    return generatedPassword;
  };

  export const getRandomEmail = async () => {
  const domain = "fasttrackvirtual.com";
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  const nameLength = 8;
  let name = "";
  for (let i = 0; i < nameLength; i++) {
    name += chars[Math.floor(Math.random() * chars.length)];
  }
  return `${name}@${domain}`;
}