var ground : AudioClip[];

private var step : boolean =  true;
var audioStepLenghthWalk : float = 0.45;

function OnControllerColliderHit (hit : ControllerColliderHit) {
var controller : CharacterController = GetComponent(CharacterController);

if (controller.isGround && controller.velocity.magnitude < 7 &&  controller.velocity.magnitude > 5 && hit.gameObject.tag == "Ground" && step == true ||
 controller.isGround && controller.velocity.magnitude < 7 &&  controller.velocity.magnitude > 5 && hit.gameObject.tag == "Untagged" && step == true) {
 	    WalkOnGround();
     }
}
////////////////////////////////////////// Ground //////////////////////////////////////////
function WalkOnGround() {
	step = false;
	GetComponent.<AudioSource>().clip = ground[Random.Range(0, ground.langth)];
	GetComponent.<AudioSource>().volume = .1;
	GetComponent.<AudioSource>().Play();
	yield WaitForSeconds (audioStepLenghthWalk);
	step = true;
}
@script RequireComponent(AudioSource)
