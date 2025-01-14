type SourceData = {  //создание псевдонима типа для определения типа данных входящих переменных и задания содержания основных свойств объекта
    title: string;
    year: number;
    author: string;
};

type TargetData = SourceData & { //та же процедура для доп. свойств объекта
    preview: string;
    url: string;
};

const createBook = (source: SourceData): TargetData => {
    return {
        ...source, //распаковка всех свойств объекта source

        //формирование доп.свойств
        preview: `Название: ${source.title}, Автор: ${source.author}, Год: ${source.year}`,
        url: `www.someurl.com/preview?title=${encodeURIComponent(source.title)}&year=${source.year}&author=${encodeURIComponent(source.author)}`, //добавление кодирования отдельных элементов url
    }
}

const source: SourceData = {
    title: "The Hitchhiker’s Guide to the Galaxy",
    year: 1979,
    author: "Douglas Adams",
};

const target = createBook(source);
console.log(target);
