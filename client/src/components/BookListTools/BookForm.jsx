import React, { useState, useContext, createRef } from 'react';
import { BookListContext } from '../../contexts/BookListContextProvider';
import { UserContext } from '../../contexts/UserContextProvider';

// import img from "./11.jpg"  {/* <img src={img}/> */}


import TextareaAutosize from 'react-textarea-autosize';



const BookForm = (props) => {

    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")

    const [file, setFile] = useState(null)

    const [progress, setProgress] = useState("0%")
console.log(progress==="0%")
    const { dispatch } = useContext(BookListContext)
    const { user } = useContext(UserContext)

    let myRef = createRef()



    const handleSubmit = (e) => {
        e.preventDefault()


        if (title === "") { return null }



        // dispatch({ type: "addBook", book: { title, author: author || Date().substr(0, 24), id: Date.now(), finish: false } })

        dispatch({ type: "uploadFile", setProgress, setFile, file: file, book: { title, files: file ? [file.name] : null, author: author || Date().substr(0, 24), id: Date.now(), finish: false } })

        setTitle("")
        setAuthor("")
    }

    const handleChange = (e) => {
        e.preventDefault();

        console.log(e.currentTarget.files[0])


        setTitle((title + " " + e.currentTarget.files[0].name).trim())


        e.currentTarget.files[0]
            ? setFile(e.currentTarget.files[0])
            : setFile(null)




        //  console.log(URL.createObjectURL(e.currentTarget.files[0]))

        // dispatch({ type: "uploadFile", file: e.currentTarget.files[0], book: { title, author: author || Date().substr(0, 24), id: Date.now(), finish: false } })


    }



    //{!user.username &&<button>  <Link to="/login" >login  </Link></button>}
    return (

        // user.username&& <React.Fragment>
        <React.Fragment>



            <TextareaAutosize value={title}

                placeholder="title"
                onChange={
                    (e) => {

                        setTitle(e.currentTarget.value)
                    }}

            ></TextareaAutosize>
            <input placeholder={Date().substr(0, 24)} type="text" value={author} onChange={(e) => { setAuthor(e.currentTarget.value) }} ></input>



            {file && <img src={file ? URL.createObjectURL(file) : ""} style={{ opacity: 1.0, width: 200, height: 100 }}></img>}

            <div>
                <input type="file" style={{ display: "none" }} onChange={handleChange} ref={fileInput => myRef = fileInput} />
                <button
                    disabled={progress !== "0%" && progress !== "100.00%"}
                    className="btn"
                    onClick={() => { myRef.click() }}>
                    {progress}
                </button>

                <button
                    disabled={!title}
                    className="btn"
                    style={{ float: "right", marginTop: "5px" }}
                    onClick={handleSubmit}>
                    Add Book
                </button >
            </div>






            {/* </form> } */}





            {/* <img src="https://picsum.photos/600/100" style={{opacity:0.3}}></img> */}








        </React.Fragment>
    );
}

export default BookForm;