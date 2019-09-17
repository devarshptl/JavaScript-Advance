const st = new Set();

st.add(1);
st.add(2);


st.add(2);
st.add({a:`one`,b:`two`});

console.log(st); //Set { 1, 2, { a: 'one', b: 'two' } }


for(let item of st){
	console.log(item);
}


st.forEach(value => {
	console.log(value);}
	);


/**********************************/

