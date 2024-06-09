document.addEventListener('corru_resources_added', ()=>{
	//Init other things here? Probably things that only need to be loaded once unless there's a cleansing?
	updateDialogActors()
	updateEntityNames()
	//UpdateVNActors()
})

document.addEventListener('corru_changed', (ev)=>{
	//initCharSprites()
	initEntityReplacements()
	
})	

// CSS as by Max, removes a lot of my shitcode.
var css = `
/* BOZKO */
#realgrid .character.bozko { width: calc(var(--gridTileSize) * 0.8); }
.bozko figure { transform: translateY(-20%); }
.bozko .head { background-image: url(https://tdustries.pro/fs/img/obesk/bozkobot/stage/bozkohead.gif) !important; --baseTransform: rotateY(0deg) }
.bozko .body { background-image: url(https://tdustries.pro/fs/img/obesk/bozkobot/stage/bozkobody.gif) !important; transform: rotateY(180deg) }
.bozko .arms { background-image: url(https://tdustries.pro/fs/img/obesk/bozkobot/stage/bozkoarms.gif) !important; --baseTransform: rotateY(0deg) }
    .bozko .arms::after { background-image: url(https://tdustries.pro/fs/img/obesk/bozkobot/stage/bozkofingers.gif) !important; content: ""; }

body[quality="low"] #content .bozko figure { display: none;}
body[quality="low"] #content .bozko {
    background-position: top;
    background-image: 
        url(https://tdustries.pro/fs/img/obesk/bozkobot/stage/bozkohead.gif),
        url(https://tdustries.pro/fs/img/obesk/bozkobot/stage/bozkobody.gif),
        url(https://tdustries.pro/fs/img/obesk/bozkobot/stage/bozkoarms.gif),
        url(https://tdustries.pro/fs/img/obesk/bozkobot/stage/bozkofingers.gif) !important;
}

/* FOCUS APPEARANCE */
.focus .head.bozko-focus::after {
    background-image: url(https://tdustries.pro/fs/img/obesk/bozkobot/stage/bozkohead.gif) !important;
    background-size: auto 285%;
    background-position: center top;
    transform: 60vmin;
    width: 60vmin;
}

/* VN */
#bozko.vn-char { height: 150vmin }
#bozko.vn-char .head { background-image: url(https://tdustries.pro/fs/img/obesk/bozkobot/stage/bozkohead.gif) !important;}
    .vn-wrapper.vn-con #bozko .head { background-image: url(/img/sprites/obesk/bozko/full/connector.gif), https://tdustries.pro/fs/img/obesk/bozkobot/stage/bozkohead.gif) !important;}
#bozko.vn-char .body { background-image: url(https://tdustries.pro/fs/img/obesk/bozkobot/stage/bozkobody.gif) !important;}
#bozko.vn-char .arms { background-image: url(https://tdustries.pro/fs/img/obesk/bozkobot/stage/bozkoarms.gif) !important;}
    #bozko.vn-char .arms::before { background-image: url(https://tdustries.pro/fs/img/obesk/bozkobot/stage/bozkofingers.gif) !important; content: ""; background-position: bottom;}
`;

document.head.appendChild(document.createElement('style').appendChild(document.createTextNode(css)).parentElement);






	
function updateEntityNames(){
		copyEntity('bozko','notsobozko')
		env.entities.bozko.text =`
			"::RESPONSIVE THOUGHTFORM
			::EXPLICIT PURPOSE::'recollection'
			<span style='color: var(--friend-color)'>::RECONSTRUCTED SIGNATURE CONTEXT</span>
			<span style='color: var(--friend-color)'>+</span>'<span>+'a close up of a red shirt with a black background, cga graphics scheme, beautifully dithered gradients, mandelbot fractal anatomical, ( ( strong dither ) ), mandelbot fractal, anime girl in ascii art style, scanlines, fractal cyborg ninja background, void manifold, dithered gradient"</span>'
			<span style='color: var(--friend-color)'>+</span>'extreme-pressure qou-body formation'
			<span style='color: var(--friend-color)'>+</span>'<span class="definition" definition="INHERITED CONTEXT::'caste';'partial meaning loss due to damaged context'">kiv</span> receptors, flourished'"
`		
		
}
	
function initEntityReplacements(){ // This whole thing is to grab entities in the scene and replace them with the new contexts
	console.log(replaceEntityInScene('bozko','notsobozko'))
}	


function replaceEntityInScene(trgt,define){
	elementtrgt = document.querySelector('[entity = \"' + trgt + '\"]')
	if(elementtrgt != null && elementtrgt != 'undefined'){
		elementtrgt.setAttribute("entity", define)
		return 'replaced'+trgt+'with'+define
	}
	
}

function copyEntity(oldEnt,newEnt){ //Different to the baseline createEntity, this will copy an existing entity and it's functions to a new name, because we can't dynamically rename them (Yet), makes it less annoying to a degree
	env.entities[newEnt] = env.entities[oldEnt]
}

function updateDialogActors(){
	env.dialogueActors.bozko.name = "NotSoBozko"
	env.dialogueActors.bozko.image = "'https://tdustries.pro/fs/img/obesk/bozkobot/portrait.gif'"
	
}


































/*

function initCharSprites(){ // Sometimes people go missing, we'll reinit here for them.
	changeSpriteOfTargetStage('.bozko .head', 'https://tdustries.pro/fs/img/obesk/bozkobot/stage/bozkohead.gif')
	changeSpriteOfTargetStage('.bozko .arms', 'https://tdustries.pro/fs/img/obesk/bozkobot/stage/bozkoarms.gif')
	changeSpriteOfTargetStage('.bozko .body', 'https://tdustries.pro/fs/img/obesk/bozkobot/stage/bozkobody.gif')
	changeSpriteOfTargetVN('bozko', 
				`
	                <div id="bozko" class="vn-char vn-qou">
                    <div class="headbot" style="background-image: url('https://tdustries.pro/fs/img/obesk/bozkobot/full/bozkohead.gif');"></div> 
					<div class="bodybot" style="background-image: url('https://tdustries.pro/fs/img/obesk/bozkobot/full/bozkobody.gif');"></div> 
					<div class="armsbot" style="background-image: url('https://tdustries.pro/fs/img/obesk/bozkobot/full/bozkoarms.gif');"></div>
                    <span class="target" entity="bozko"></span>
                </div>`
				)
}



function
function updateDialogActors(){
	env.dialogueActors.bozko.name = "NotSoBozko"
	env.dialogueActors.bozko.image = "'https://tdustries.pro/fs/img/obesk/bozkobot/portrait.gif'"
	
}

function changeSpriteOfTargetStage(trgt,url){
	target = document.querySelector(trgt)
    if(target != 'undefined' && target != null){
        target.style.backgroundImage = (['url('+url+')'])
    }
	else{
		console.log("Caught missing:" + trgt)
	}

}

function changeSpriteOfTargetVN(trgt,define){
	VN.chars[trgt] = define
}

*/


