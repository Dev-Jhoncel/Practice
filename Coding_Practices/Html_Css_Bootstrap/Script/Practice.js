class Movie
{
    constructor(
        Title,
        Director,
        Cast,
       )
       {
        let cast = [];
        this.Title = Title;
        this.Director = Director;
        for(var item in Cast)
        {
            cast.push(Cast[item]);
        }
        this.Cast = cast;
       }
}

export default Movie; 