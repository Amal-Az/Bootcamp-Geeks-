import math
import turtle
class Circle:
    def __init__(self, *, radius=None, diameter=None):
        if radius is not None:
            self._radius = radius
        elif diameter is not None:
            self._radius = diameter / 2
        else:
            raise ValueError("You must specify either radius or diameter")
        
    @property
    def radius(self):
        return self._radius

    @radius.setter
    def radius(self, value):
        self._radius = value   

    @property
    def diameter(self):
        return self._radius * 2

    @diameter.setter
    def diameter(self, value):
        self._radius = value / 2

    @property
    def area(self):
        return math.pi * self._radius ** 2

    def __str__(self):
        return f"Circle with radius: {self.radius:.2f}, diameter: {self.diameter:.2f}, area: {self.area:.2f}" 
    
    def __add__(self, other):
        if isinstance(other, Circle):
            return Circle(radius=self.radius + other.radius)
        return NotImplemented
    
    def __lt__(self, other):
        if isinstance(other, Circle):
            return self.radius < other.radius
        return NotImplemented

    def __eq__(self, other):
        if isinstance(other, Circle):
            return self.radius == other.radius
        return NotImplemented
    
c1 = Circle(radius=3)
c2 = Circle(diameter=8)

print(c1)  
print(c2)

c3 = c1 + c2  
print(c3)

print(c1 == c2)  
print(c1 < c2)   

circles = [c1, c2, c3]
circles.sort()
for c in circles:
    print(c)

    
# bonus
def draw_circles(circles):
    turtle.speed(0)
    turtle.penup()
    x = -200
    for circle in circles:
        turtle.setpos(x, 0)
        turtle.pendown()
        turtle.circle(circle.radius)
        turtle.penup()
        x += circle.diameter + 10
    turtle.done()