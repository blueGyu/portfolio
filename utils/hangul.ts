const CHOSUNG = ["ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ", "ㄹ", "ㅁ", "ㅂ", "ㅃ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];
const JUNGSUNG = ["ㅏ", "ㅐ", "ㅑ", "ㅒ", "ㅓ", "ㅔ", "ㅕ", "ㅖ", "ㅗ", "ㅘ", "ㅙ", "ㅚ", "ㅛ", "ㅜ", "ㅝ", "ㅞ", "ㅟ", "ㅠ", "ㅡ", "ㅢ", "ㅣ"];
const JONGSUNG = ["", "ㄱ", "ㄲ", "ㄳ", "ㄴ", "ㄵ", "ㄶ", "ㄷ", "ㄹ", "ㄺ", "ㄻ", "ㄼ", "ㄽ", "ㄾ", "ㄿ", "ㅀ", "ㅁ", "ㅂ", "ㅄ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];

export function getDisassembled(text: string) {
  const splitHangul = text.split("").map((char) => {
    const charCode = char.charCodeAt(0);
    if (charCode >= 0xac00 && charCode <= 0xd7a3) {
      const syllableIndex = charCode - 0xac00;
      const chosungIndex = Math.floor(syllableIndex / (21 * 28));
      const jungsungIndex = Math.floor((syllableIndex % (21 * 28)) / 28);
      const jongsungIndex = syllableIndex % 28;

      const chosung = CHOSUNG[chosungIndex];
      const jungsung = JUNGSUNG[jungsungIndex];
      const jongsung = JONGSUNG[jongsungIndex];

      return {
        char,
        chosung,
        jungsung,
        jongsung,
      };
    }

    return {
      char,
      chosung: "",
      jungsung: "",
      jongsung: "",
    };
  });

  return splitHangul;
}

interface AssembledHangul {
  chosung: string;
  jungsung: string;
  jongsung?: string;
}

export function getAssembled({ chosung, jungsung, jongsung = "" }: AssembledHangul) {
  if (chosung === "" || jungsung === "") {
    return "chosung, jungsung의 값이 없습니다.";
  }

  const chosungIndex = CHOSUNG.indexOf(chosung);
  const jungsungIndex = JUNGSUNG.indexOf(jungsung);
  const jongsungIndex = JONGSUNG.indexOf(jongsung);

  const startHangulUnicode = 0xac00; // 가
  const assembledUnicode = startHangulUnicode + chosungIndex * 21 * 28 + jungsungIndex * 28 + jongsungIndex;

  return String.fromCharCode(assembledUnicode);
}
