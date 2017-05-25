	class Fighter{
	constructor(name='anonymous', power=10, health=100){
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
let fighter= new Fighter('misha', 10, 1000);
let improvedFighter= new ImprovedFighter('marta', 10,1000);

let fight=(fighter, improvedFighter, ...point)=>{
	while(fighter.health>0&&improvedFighter.health>0){
	fighter.hit(improvedFighter, point);
	improvedFighter.doubleHit(fighter,point);
	}
	if (fighter.health>improvedFighter.health)
		console.log(`***********************
		${fighter.name} WON`);
	else console.log(`***********************
		${improvedFighter.name} WON`);
}
fight(fighter, improvedFighter, 10)