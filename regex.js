const str="<div><p class='name'><span>'ok'</span></p><p>'this'</p><p>'is'</p><p>'apple'</p></div>";
function testrexpression() {
	// const re=/[<p>]+[<p>]+/g;
    const res=/<p(([\s\S])*?)<\/p>/g;
    const restest=/<span(([\s\S])*?)<\/span>/g
	const match=str.match(res);
    const match2=str.match(restest);
	console.log(match);
    console.log(match2);
    // console.log('111111');
}

testrexpression();

