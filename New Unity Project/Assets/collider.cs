using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class collider : MonoBehaviour {

    public Transform glow;

    // Use this for initialization
	void Start () {

        glow.GetComponent<ParticleSystem>() .enableEmission = true;
		
	}

    private void OnTriggerEnter2D()
    {
        glow.GetComponent<ParticleSystem>().enableEmission = false;
        StartCoroutine(stopGlow ());
    }
    IEnumerator stopGlow ()

    {
        yield return new WaitForSeconds(.4f);

        glow.GetComponent<ParticleSystem>().enableEmission = true;
    }

}
