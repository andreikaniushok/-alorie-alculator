export interface IHuman {
  gender: 'none' | 'man' | 'woman'
  age: number | null
  height: number | null
  lifestyle: 'lowActivity' | 'moderateActivity' | 'mediumActivity' | 'highActivity' | 'none'
  weight: number | null
}
