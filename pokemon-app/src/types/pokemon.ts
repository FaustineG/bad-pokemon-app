import Type from "./types";

type BaseProperty = {
  HP: number;
  Attack: number;
  Defense: number;
  "Sp. Attack": number;
  "Sp. Defense": number;
  Speed: number;
};

type Pokemon = {
  id: number;
  name: {
    english: "string";
    japanese: "string";
    chinese: "string";
    french: "string";
  };
  type: Type[];
  base: BaseProperty;
};

export default Pokemon;
export type { BaseProperty };
