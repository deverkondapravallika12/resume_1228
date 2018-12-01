function getfile(file,callback){
	var xhr=new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
	xhr.open("GET",file,true);
	xhr.onreadystatechange=function(){
		if(xhr.readyState===4 && xhr.status=="200"){
			callback(xhr.responseText);
		}
	};
	xhr.send(null);	
}
getfile("main.json",function(text){
	let data=JSON.parse(text);
	console.log(data);
	profile(data.profile);
	carrer(data.carrer);
	education(data.education);
	languages(data.languages);
	skills(data.skills);
}
	)
var left=document.querySelector(".left");
function profile(pro){
	var img=document.createElement("img");
	img.src=pro.img;
	left.appendChild(img);
	var h2=document.createElement("h2");
	h2.textContent=pro.name;
	left.appendChild(h2);
	var h3=document.createElement("h3");
	h3.textContent=pro.roll;
	left.appendChild(h3);
	var h4=document.createElement("h4");
	h4.textContent=pro.college;
	left.appendChild(h4);
	var h5=document.createElement("h5");
	h5.textContent=pro.place;
	left.appendChild(h5);
}
var right=document.querySelector(".right");
function carrer(c){
	var h1=document.createElement("h1");
	h1.textContent="RESUME";
	right.appendChild(h1);
	var h2=document.createElement("h2");
	h2.textContent="carrerobjective";
	right.appendChild(h2);
	var hr=document.createElement("hr");
	right.appendChild(hr);
	var p=document.createElement("p");
	p.textContent=c.info;
	right.appendChild(p);

}
function education(e){
	var h2=document.createElement("h2");
	h2.textContent="EDUCATION DETAILS";
	right.appendChild(h2);
	var hr=document.createElement("hr");
	right.appendChild(hr);
	var tb=document.createElement("TABLE");
	tb.border="2";
	var tr1="<tr><td><degree></td><td><institution></td><td><yearofpassing</td></tr>";
	var tr2="";
	for(i=0;i<e.length;i++){
		tr2=tr2+"<tr><td>"+e[i].degree+"</td><td>"+e[i].institution+"</td><td>"+e[i].yearofpassing+"</td><tr>";
	}
	tb.innerHTML=tr1+tr2;
	right.appendChild(tb);
}
function languages(l){
	var h2=document.createElement("h2");
	h2.textContent="languages";
	right.appendChild(h2);
	var hr=document.createElement("hr");
	right.appendChild(hr);
	var ul=document.createElement("ul");
	right.appendChild(ul);
	for(i=0;i<l.length;i++){
		var li=document.createElement("li");
		li.textContent=l[i].languages;
		ul.appendChild(li);
	}
}
function skills(s){
	var h2=document.createElement("h2");
	h2.textContent="skills";
	right.appendChild(h2);
	var hr=document.createElement("hr");
	right.appendChild(hr);
	var ul=document.createElement("ul");
	right.appendChild(ul);
	for(i=0;i<s.length;i++){
		var li=document.createElement("li");
		li.textContent=s[i].title+":"+s[i].content;
		ul.appendChild(li);
	}
}