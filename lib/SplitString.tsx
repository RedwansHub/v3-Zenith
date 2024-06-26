function splitStringRgx(input: string): string[] {
    const character: string[] = [];
    const regex = /[\s\S]/gu;

    let match;

    while ((match = regex.exec(input)) !== null ) {
        character.push(match[0])
    }

    return character
}

export default splitStringRgx