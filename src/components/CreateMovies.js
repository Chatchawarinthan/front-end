import React from 'react'


const CreateMovies = ({onChangeForm, createMovies }) => {


    return(
        <div className="container">
            <div className="row">
                <div className="col-md-7 mrgnbtm">
                <h2>Create Movie</h2>
                <form>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputEmail1">Title</label>
                            <input type="text" onChange={(e) => onChangeForm(e)}  className="form-control" name="title " id="title" aria-describedby="emailHelp" placeholder="title " />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputPassword1">Genre</label>
                            <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="genre" id="genre" placeholder="genre" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-12">
                            <label htmlFor="exampleInputEmail1">director</label>
                            <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="director" id="director" aria-describedby="emailHelp" placeholder="director" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-12">
                            <label htmlFor="exampleInputEmail1">release_year</label>
                            <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="release_year" id="release_year" aria-describedby="emailHelp" placeholder="release_year" />
                        </div>
                    </div>
                    <button type="button" onClick= {(e) => createMovies()} className="btn btn-danger">Create</button>
                </form>
                </div>
            </div>
        </div>
    )
}

export default CreateMovies