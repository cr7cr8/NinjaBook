import React, { useState, useContext, createRef } from 'react';
import { BookListContext } from '../../contexts/BookListContextProvider';
import { UserContext } from '../../contexts/UserContextProvider';

// import img from "./11.jpg"  {/* <img src={img}/> */}


import TextareaAutosize from 'react-textarea-autosize';



const BookForm = (props) => {

    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")

    const [file, setFile] = useState(null)
    const [pic, setPic] = useState(null)


    const [fileProgress, setFileProgress] = useState("File")
    const [picProgress, setPicProgress] = useState("Picture")



    const { dispatch } = useContext(BookListContext)
    const { user } = useContext(UserContext)

    let myRef = createRef()

    let picRef;



    const handleSubmit = (e) => {
        e.preventDefault()


        if (title === "") { return null }



        !file && !pic && dispatch({ type: "addBook", book: { title, author: author || Date().substr(0, 24), id: Date.now(), finish: false } })

        file && !pic && dispatch({ type: "uploadFile", setFileProgress, setFile, file, pic, book: { title, files: [file.name], author: author || Date().substr(0, 24), id: Date.now(), finish: false } })

        !file && pic && dispatch({ type: "uploadPic", setPicProgress, setPic, pic, book: { title, picture: true, author: author || Date().substr(0, 24), id: Date.now(), finish: false } })
        
        file && pic &&

            dispatch({ type: "uploadBoth", setFileProgress,setPicProgress, setFile, setPic, file, pic, book: { title, picture:true,files: [file.name], author: author || Date().substr(0, 24), id:Date.now(), finish: false } })



        setTitle("")
        setAuthor("")
    }

    const handleChange = (e) => {
        e.preventDefault();
        console.log(e.currentTarget.files[0])
        if (!e.currentTarget.files[0]) {
            return setFile(null)
        }

        setTitle((title + " " + e.currentTarget.files[0].name).trim())
        e.currentTarget.files[0]
            ? setFile(e.currentTarget.files[0])
            : setFile(null)

    }

    const picChange = (e) => {
        e.preventDefault();
        console.log(e.currentTarget.files)
        if (!e.currentTarget.files[0]) {
            return setPic(null)
        }

        const picArr = [];
        for (let i = 0; i < e.currentTarget.files.length; i++) {
            picArr.push(e.currentTarget.files[i])
            // break;

        }

        //setTitle((title + " " + e.currentTarget.files[0].name).trim())
        e.currentTarget.files
            ? setPic(picArr)
            : setPic(null)


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

            {
                pic && pic.map((picture, index) => {
                    return <img key={index} src={picture ? URL.createObjectURL(picture) : ""} style={{ opacity: 1.0, width: 200, height: "auto" }}></img>
                })
            }

            {file && <div>{file.name}</div>}


            <div>

                <input type="file" multiple style={{ display: "none" }} accept="image/x-png,image/gif,image/jpeg" onChange={picChange} ref={fileInput => picRef = fileInput} />
                <button
                    disabled={fileProgress !== "File"||picProgress!=="Picture"}
                    className="btn"
                    onClick={() => { picRef.click() }}>
                    {picProgress}
                </button>


                <input type="file" style={{ display: "none" }} onChange={handleChange} ref={fileInput => myRef = fileInput} />
                <button
                    disabled={fileProgress !== "File"||picProgress!=="Picture"}
                    className="btn"
                    onClick={() => { myRef.click() }}>
                    {fileProgress}
                </button>





                <button
                    disabled={!title || fileProgress !== "File"}
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