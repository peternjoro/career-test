
export const getRandomNumber = (min:number,max:number):number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const shuffleArray = (array:Array<number>) => {
    let a = [...array];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

export const quizArrayDifference = (quizesArray:Array<number>,takenQuizes:Array<number>) => {
    return quizesArray.filter(item => !takenQuizes.includes(item));
}

export const lowercase = (str:string) => {
    let results = str;
    if(str && str.length > 0){
        results = (str.trim()).toLowerCase();
    }
    return results;
}