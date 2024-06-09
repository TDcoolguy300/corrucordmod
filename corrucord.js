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
.bozko .head { background-image: url(https://tdcoolguy300.github.io/corrucordmod/img/obesk/bozkobot/stage/bozkohead.gif) !important; --baseTransform: rotateY(0deg) }
.bozko .body { background-image: url(https://tdcoolguy300.github.io/corrucordmod/img/obesk/bozkobot/stage/bozkobody.gif) !important; transform: rotateY(180deg) }
.bozko .arms { background-image: url(https://tdcoolguy300.github.io/corrucordmod/img/obesk/bozkobot/stage/bozkoarms.gif) !important; --baseTransform: rotateY(0deg) }
    .bozko .arms::after { background-image: url(https://tdcoolguy300.github.io/corrucordmod/img/obesk/bozkobot/stage/bozkofingers.gif) !important; content: ""; }

body[quality="low"] #content .bozko figure { display: none;}
body[quality="low"] #content .bozko {
    background-position: top;
    background-image: 
        url(https://tdcoolguy300.github.io/corrucordmod/img/obesk/bozkobot/stage/bozkohead.gif),
        url(https://tdcoolguy300.github.io/corrucordmod/img/obesk/bozkobot/stage/bozkobody.gif),
        url(https://tdcoolguy300.github.io/corrucordmod/img/obesk/bozkobot/stage/bozkoarms.gif),
        url(https://tdcoolguy300.github.io/corrucordmod/img/obesk/bozkobot/stage/bozkofingers.gif) !important;
}

/* FOCUS APPEARANCE */
.focus .head.bozko-focus::after {
    background-image: url(https://tdcoolguy300.github.io/corrucordmod/img/obesk/bozkobot/full/bozkohead.gif) !important;
    background-size: auto 285%;
    background-position: center top;
    transform: 60vmin;
    width: 60vmin;
}

/* VN */
#bozko.vn-char { height: 150vmin }
#bozko.vn-char .head { background-image: url(https://tdcoolguy300.github.io/corrucordmod/img/obesk/bozkobot/full/bozkohead.gif) !important;}
    .vn-wrapper.vn-con #bozko .head { background-image: url(/img/sprites/obesk/bozko/full/connector.gif), https://tdcoolguy300.github.io/corrucordmod/img/obesk/bozkobot/full/bozkohead.gif) !important;}
#bozko.vn-char .body { background-image: url(https://tdcoolguy300.github.io/corrucordmod/img/obesk/bozkobot/full/bozkobody.gif) !important;}
#bozko.vn-char .arms { background-image: url(https://tdcoolguy300.github.io/corrucordmod/img/obesk/bozkobot/full/bozkoarms.gif) !important;}
    #bozko.vn-char .arms::before { background-image: url(https://tdcoolguy300.github.io/corrucordmod/img/obesk/bozkobot/full/bozkofingers.gif) !important; content: ""; background-position: bottom;}







/* TOZIK */
.tozik .body {background-image: url(https://tdcoolguy300.github.io/corrucordmod/img/obesk/tozikdrip/stage/tozikjacket.gif), url(/img/sprites/obesk/tozik/stage/tozik_body.gif);}
.tozik .body::after {content: ""; background-image: url(https://tdcoolguy300.github.io/corrucordmod/img/obesk/tozikdrip/stage/toziksleeves.gif), url(/img/sprites/obesk/tozik/stage/tozik_arms.gif);}
.tozik .head { background-image: url(/img/sprites/obesk/tozik/stage/tozik_eyes.gif), url(https://tdcoolguy300.github.io/corrucordmod/img/sprites/obesk/tozikdrip/stage/tozik_head.gif), url(https://tdcoolguy300.github.io/corrucordmod/img/sprites/obesk/tozikdrip/stage/tozik_headcore.gif); }
#realgrid[stage="embassy_research"] .character.tozik {
    --charTransform: translateZ(calc(var(--gridTileSize) * -0.9)) translateY(10%);
}

.collapse #realgrid .truecreature .tozik .head {
    background-image: url(/img/sprites/obesk/tozik/stage/connector.gif), url(/img/sprites/obesk/tozik/stage/tozik_eyes.gif), url(https://tdcoolguy300.github.io/corrucordmod/img/sprites/obesk/tozikdrip/stage/tozik_head.gif), url(https://tdcoolguy300.github.io/corrucordmod/img/sprites/obesk/tozikdrip/stage/tozik_headcore.gif);
}

body[quality="low"] #content .tozik figure { display: none;}
body[quality="low"] #content .tozik {
    background-image: 
        url(/img/sprites/obesk/tozik/stage/tozik_eyes.gif),
        url(https://tdcoolguy300.github.io/corrucordmod/img/sprites/obesk/tozikdrip/stage/tozik_head.gif),
        url(https://tdcoolguy300.github.io/corrucordmod/img/sprites/obesk/tozikdrip/stage/tozik_headcore.gif),
		url(https://tdcoolguy300.github.io/corrucordmod/img/sprites/obesk/tozikdrip/stage/toziksleeves.gif),
        url(/img/sprites/obesk/tozik/stage/tozik_arms.gif),
		url(https://tdcoolguy300.github.io/corrucordmod/img/sprites/obesk/tozikdrip/stage/tozikjacket.gif),
        url(/img/sprites/obesk/tozik/stage/tozik_body.gif)
}
/* VN */
.vn-char#tozik {
    height: 180vmin; //Before you ask, i edited the full ones only, not the stage ones.
}
.vn-char#tozik .head { background-image: url(/img/sprites/obesk/tozik/full/tozik_eyes.gif), url(https://tdcoolguy300.github.io/corrucordmod/img/sprites/obesk/tozikdrip/full/tozik_head.gif), url(https://tdcoolguy300.github.io/corrucordmod/img/sprites/obesk/tozikdrip/full/tozik_headcore.gif); }
.vn-char#tozik .body { background-image: url(https://tdcoolguy300.github.io/corrucordmod/img/sprites/obesk/tozikdrip/full/tozikjacket.gif), url(/img/sprites/obesk/tozik/full/tozik_body.gif); }
.vn-char#tozik .body::before {
    background-image: url(https://tdcoolguy300.github.io/corrucordmod/img/sprites/obesk/tozikdrip/full/toziksleeves.gif), url(/img/sprites/obesk/tozik/full/tozik_arms.gif);
    background-size: inherit;
    content: "";
    animation: TINYHOVER 10s EASE-IN-OUT infinite alternate;
}
.vn-wrapper.vn-con #tozik .head { background-image: url(/img/sprites/obesk/tozik/full/connector.gif), url(/img/sprites/obesk/tozik/full/tozik_eyes.gif), url(https://tdcoolguy300.github.io/corrucordmod/img/sprites/obesk/tozikdrip/full/tozik_head.gif), url(https://tdcoolguy300.github.io/corrucordmod/img/sprites/obesk/tozikdrip/full/tozik_headcore.gif); }
#content[embassyday="1"] .vn-char#tozik .head { background-image: url(/img/sprites/obesk/tozik/full/connectoralt.gif), url(/img/sprites/obesk/tozik/full/tozik_eyes.gif), url(https://tdcoolguy300.github.io/corrucordmod/img/sprites/obesk/tozikdrip/full/tozik_head.gif), url(https://tdcoolguy300.github.io/corrucordmod/img/sprites/obesk/tozikdrip/full/tozik_headcore.gif); }

/* FOCUS */
.focus .head.tozik-focus {
    --rotation: rotateX(-90deg) rotateY(90deg);
    transform: translate(-100%, 0) var(--rotation);
    background-image: url(/img/sprites/obesk/tozik/full/tozik_eyes.gif), url(https://tdcoolguy300.github.io/corrucordmod/img/sprites/obesk/tozikdrip/full/tozik_head.gif), url(https://tdcoolguy300.github.io/corrucordmod/img/sprites/obesk/tozikdrip/full/tozik_headcore.gif);
    background-size: auto 365%;
    background-position: center 0;
}







/* LAMP */
#realgrid .lamp figure::before, #realgrid .lamp figure::after {
    background-image: url(https://tdcoolguy300.github.io/corrucordmod/img/things/lamp.gif) !important;
}





`;

document.head.appendChild(document.createElement('style').appendChild(document.createTextNode(css)).parentElement);






	
function updateEntityNames(){
		copyEntity('bozko','notsobozko')
		env.entities.notsobozko.image = "https://tdcoolguy300.github.io/corrucordmod/img/obesk/bozkobot/portrait.gif"
		env.entities.notsobozko.text =`
			::RESPONSIVE THOUGHTFORM
			::EXPLICIT PURPOSE::'recollection'
			<span style='color: var(--friend-color)'>::RECONSTRUCTED SIGNATURE CONTEXT</span>
			<span style='color: var(--friend-color)'>+</span>'<span>'a close up of a red shirt with a black background, cga graphics scheme, beautifully dithered gradients, mandelbot fractal anatomical, ( ( strong dither ) ), mandelbot fractal, anime girl in ascii art style, scanlines, fractal cyborg ninja background, void manifold, dithered gradient</span>'
			<span style='color: var(--friend-color)'>+</span>'extreme-pressure qou-body formation'
			<span style='color: var(--friend-color)'>+</span>'<span class="definition" definition="INHERITED CONTEXT::'caste';'partial meaning loss due to damaged context'">kiv</span> receptors, flourished'
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
	env.dialogueActors.bozko.image = "'https://tdcoolguy300.github.io/corrucordmod/img/obesk/bozkobot/portrait.gif'"
	
}


































/*

function initCharSprites(){ // Sometimes people go missing, we'll reinit here for them.
	changeSpriteOfTargetStage('.bozko .head', 'https://tdcoolguy300.github.io/corrucordmod/img/obesk/bozkobot/stage/bozkohead.gif')
	changeSpriteOfTargetStage('.bozko .arms', 'https://tdcoolguy300.github.io/corrucordmod/img/obesk/bozkobot/stage/bozkoarms.gif')
	changeSpriteOfTargetStage('.bozko .body', 'https://tdcoolguy300.github.io/corrucordmod/img/obesk/bozkobot/stage/bozkobody.gif')
	changeSpriteOfTargetVN('bozko', 
				`
	                <div id="bozko" class="vn-char vn-qou">
                    <div class="headbot" style="background-image: url('https://tdcoolguy300.github.io/corrucordmod/img/obesk/bozkobot/full/bozkohead.gif');"></div> 
					<div class="bodybot" style="background-image: url('https://tdcoolguy300.github.io/corrucordmod/img/obesk/bozkobot/full/bozkobody.gif');"></div> 
					<div class="armsbot" style="background-image: url('https://tdcoolguy300.github.io/corrucordmod/img/obesk/bozkobot/full/bozkoarms.gif');"></div>
                    <span class="target" entity="bozko"></span>
                </div>`
				)
}



function
function updateDialogActors(){
	env.dialogueActors.bozko.name = "NotSoBozko"
	env.dialogueActors.bozko.image = "'https://tdcoolguy300.github.io/corrucordmod/img/obesk/bozkobot/portrait.gif'"
	
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


