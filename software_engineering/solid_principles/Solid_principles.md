# The SOLID principles

The SOLID principles are five design principles of object-oriented programming that were introduced by Robert C. Martin, a.k.a. Uncle Bob, in his paper Design Principles and Design Patterns (year 2000). These five principles can be considered a basic pillar of Software Engineering and following them could help your software to be easier to maintain and to extend in the future.

In this post you will find a very brief description about the principles and a practical and simplified example in Java to understand the theory a bit better. I hope you find it useful!

## Single responsibility principle

> A class or module should have SINGLE responsibility.

**The example:** We have designed a car Engine that after its start, it will switch on the lights of the car. But should the Engine hold that responsibility?

```java
public class Engine {

    public void start() {
        System.out.println("Starting engine");
        this.switchOnLights();
    }

    public void stop() {
        System.out.println("Stopping engine");
    }

    // The engine is responsible of switching on the lights of the car
    public void switchOnLights() {
        System.out.println("Switching on lights");
    }

}
```

The answer is no. It makes much more sense that an entity like LightsController would be responsible of switching them on.

```java
public class Engine {

  private LightsController lightsController;

  public Engine() {
    this.lightsController = new LightsController();
  }

  public void start() {
    System.out.println("Starting engine");
    lightsController.switchOnLights();
  }

  public void stop() {
    System.out.println("Stopping engine");
  }

}

public class LightsController {

  public LightsController() {}

  // The responsibility of switching on the lights
  // is delegated to other component
  public void switchOnLights() {
    System.out.println("Switching on lights");
  }

}
```

## Open-closed principle

> Software entities should be open for extension, but closed for modification.

**The example:** We have coded the following Car class

```java
public class Car {

  public Car() {}

  public void start() {
    System.out.println("Starting engine...");
  }

  public void stop() {
    System.out.println("Stopping engine...");
  }

}
```

After some time, we designed a new type of Car that displays some engine stats after starting it. Instead of modifying the original class (which could be already being used by some other modules), we just extend our Car class and create a new subtype with that behaviour.

```java
public class Car {

  public Car() {}

  public void start() {
    System.out.println("Starting engine...");
  }

  public void stop() {
    System.out.println("Stopping engine...");
  }

}

// Extended class to extend functionalities
public class SuperCar extends Car {

    @override
    public void start() {
      super.start();
      System.out.println("Call a method to display engine stats");
    }

}
```

## Liskov substitution principle

> An object could be replaced with instances of their subtypes without altering the correct behaviour of the software.

**The example breaking the principle:** Let’s take our previous Car example. We went too far this time and we added a teleport function to our SuperCar.

```java
public class Car {

  public void start() {
    System.out.println("Starting engine...");
  }

  public void stop() {
    System.out.println("Stopping engine...");
  }

}

public class SuperCar extends Car {

    // Our car should roll, but it wasn't designed to be teleported...
    public void teleport(String place) {
      System.out.println("Teleporting to " + place);
    }

}
```

While this may sounds cool, this SuperCar subtype is clearly altering what it would be the correct behaviour of a car by our software design.

## Interface segregation principle

> Different client-specific interfaces are better than a general-purpose interface.

**The example:** We have decide to develop not just cars, but any kind of vehicle, so we have coded one general interface for all of them.

```java
public interface IVehicle {

    public void start();
    public void stop();
    public void openDoor();

}

public class Car implements IVehicle {
    // Some code here
}

public class Motorcycle implements Vehicle {
    // Some other code here
}
```

As you can see, we have a common Vehicle interface for our types Car and Motorcycle. But on this interface we have a method to open the doors of the Vehicle. As you can imagine, this method won’t be useful on the Motorcycle type. To fix this we could just create more client-specific interfaces, in that way we will add an extra layer to control specific cases and add cohesion to our code.

```java
public interface IVehicle {

    public void start();
    public void stop();

}

public interface ICar extends IVehicle {

    public void openDoor();

}

public interface IMotorcycle extends IVehicle {

    public void doAWheelie();

}

public class Car implements ICar {
    // Some code here
}

public class Motorcycle implements IMotorcycle {
    // Some other code here
}
```

## Dependency inversion principle

> Depend upon abstractions, not concretions.

**The example:** Now let’s come back into our LightController and its relation with the Car. We could leave it like we defined it on the example for the Single responsibility principle, however, what if we would like to add later some other types of Controllers?

```java
public class Engine {

  // We rely on an specific type
  private LightsController lightsController;

  public Engine() {
    this.lightsController = new LightsController();
  }

  public void start() {
    System.out.println("Starting engine");
    // We rely on an specific behaviour
    lightsController.switchLights();
  }

  public void stop() {
    System.out.println("Stopping engine");
  }

}

public class LightsController {

  public LightsController() {}

  public void switchLights() {
    System.out.println("Switching on lights");
  }

}
```

Insteand of depending on the class LightController, we could use an abstract CarController and call to the abstract method that later will be implemented by the specific class. The Engine won’t need to know about the implementation of the LightController or any other particular CarController. Instead, it will just need to know about the abstraction logic and call to its methods.

```java
public class Engine {

  // We rely on the abstraction
  private CarController controller;

  public Engine(CarController controller) {
  	this.controller = controller;
  }

  public void start() {
    System.out.println("Starting engine");
    controller.switchOn();
  }

  public void stop() {
    System.out.println("Stopping engine");
  }

}

// Abstract layer for CarControllers
abstract class CarController {

  public abstract void switchOn();
  public abstract void switchOff();

}

// Specific type of CarController
public class LightsController extends CarController{

  public LightsController() {}

  public void switchOn() {
    System.out.println("Switching on lights");
  }

  public void switchOff() {
    System.out.println("Switching off lights");
  }

}
```
