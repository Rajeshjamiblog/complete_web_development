function fetchPostData() {
    return new Promise( (resolve) => {
        setTimeout( () => {
            resolve("Post data fetched successfully")
        } , 2000);
    })
}


function fetchCommentData() {
    return new Promise( (resolve) => {
        setTimeout( () => {
            resolve("Comment data fetched successfully");
        }, 3000)
    })
}


// method 1 using async await
async function getBlogData() {
    try {

        console.log("Fetching blog data ...");

        const postData = await fetchPostData();
        const commentData = await fetchCommentData();
        
        console.log(postData);
        console.log(commentData);


        console.log("fetch complete");

    } catch (error) {
        console.error("Error fetching blog data", error)
    }
}


//getBlogData();

// method 2 using promise all   
async function getBlogData2() {
    try {

        console.log("Fetching blog data ...");

        const [postData, commentData] = await Promise.all([fetchPostData(), fetchCommentData()]);

        console.log(postData);
        console.log(commentData);

        console.log("fetch complete");

    } catch (error) {
        console.error("Error fetching blog data", error)
    }
}

getBlogData2();