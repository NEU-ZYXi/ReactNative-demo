class Meal {
    constructor(id, categoryId, title, affordability, complexity, imageUrl, duration, ingredients, steps, isGlutenFree, isVegan, isBeef, isPork) {
        this.id = id;
        this.categoryId = categoryId;
        this.title = title;
        this.imageUrl = imageUrl;
        this.affordability = affordability;
        this.complexity = complexity;
        this.duration = duration;
        this.ingredients = ingredients;
        this.isGlutenFree = isGlutenFree;
        this.isVegan = isVegan;
        this.steps = steps;
        this.isBeef = isBeef;
        this.isPork = isPork;
    }
}

export default Meal;