//classes + inheritance + super
	class Fighter{
	constructor(name='anonymous', power=10, health=100){ //default parameters
		this.name=name;
		this.power=power;
		this.health=health;
	}

	setDamage(damage){
		this.health=this.health-damage;
		console.log(this.health);
	}
	hit(enemy, point){
		enemy.setDamage(point*this.power);
	}
}
class ImprovedFighter extends Fighter{
	doubleHit(enemy,point){
		super.hit(enemy,point*2);
	}
}
let fighter= new Fighter('misha', 10, 1000); //block scoping (let)
let improvedFighter= new ImprovedFighter('marta', 10,1000);//block scoping (let)

let fight=(fighter, improvedFighter, ...point)=>{ //arrow function and  spread / rest 
	while(fighter.health>0&&improvedFighter.health>0){
	
	let i =Math.floor(Math.random()*(point.length));//random point for figther
	let k =Math.floor(Math.random()*(point.length));//random point for improvedfighter
	fighter.hit(improvedFighter, point[k]);
	improvedFighter.doubleHit(fighter,point[i]);
	}
	if (fighter.health>improvedFighter.health)
		console.log(`***********************
		${fighter.name} WON`);//string interpolation
	else console.log(`***********************
		${improvedFighter.name} WON`);//string interpolation
}


fight(fighter, improvedFighter, 20,2,50);