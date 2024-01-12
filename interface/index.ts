export interface ContentProps {
    posts: Array<{
        id: Number,
        userId: Number,
        title: string,
        body: string
        
    }>
}

export interface PostProps {
    data: {
        id: Number,
        userId: Number,
        title: string,
        body: string
    }
}

export interface IOlympicData {
  athlete: string;
  age: number;
  country: string;
  year: number;
  date: string;
  sport: string;
  gold: number;
  silver: number;
  bronze: number;
  total: number;
}