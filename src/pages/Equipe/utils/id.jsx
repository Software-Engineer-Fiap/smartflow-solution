export const generateRandomId = () => {
    const numericPart = Math.floor(1000000 + Math.random() * 9000000).toString();

    const letter = String.fromCharCode(65 + Math.floor(Math.random() * 26));

    const finalPart = Math.floor(1000 + Math.random() * 9000).toString();

    const randomId = `${numericPart}-${letter}${finalPart}`;

    return randomId;
};