export const languagesOptions = [
  { value: 'java', label: "Java" },
  { value: 'ci', label: "C" },
  { value: 'ci++', label: "C++" },
  { value: 'javascript', label: "JavaScript" },
  { value: 'python', label: "Python" },
];

export const languagesDetails = [
  { 
    id: 1,
    value: 'java', 
    title: "Java", 
    description: "Java is a versatile, object-oriented programming language renowned for its platform independence. It allows developers to write code once and run it anywhere, making it a popular choice for building enterprise-level applications, web servers, mobile apps, and embedded systems. Java boasts a rich ecosystem of libraries and frameworks, extensive community support, and strong security features. Its syntax is similar to C++, making it relatively easy for developers to transition to Java. Despite being over two decades old, Java remains one of the most widely used programming languages in the world.",
    yearCreated: 1995,
    creator: "Sun Microsystems",
    paradigm: ["Object-oriented programming", "Structured programming"],
    website: "https://www.java.com",
    code: `
    public class Main {
        public static void main(String[] args) {
            System.out.println("Hello, Java!");
        }
    }`,
  },
  { 
    id: 2,
    value: 'ci', 
    title: "C - Ci", 
    description: "C is a foundational programming language known for its efficiency, speed, and low-level access to system resources. Developed in the early 1970s, C has stood the test of time and remains a cornerstone of modern computing. It is widely used in system programming, operating systems, embedded systems, and applications where performance and control over hardware are critical. C's syntax and minimalistic design influenced the development of many other programming languages. Despite its simplicity, mastering C can be challenging due to its direct interaction with hardware and manual memory management.",
    yearCreated: 1972,
    creator: "Dennis Ritchie",
    paradigm: ["Procedural programming"],
    website: "https://en.wikipedia.org/wiki/C_(programming_language)",
    code: `
    #include <stdio.h>
    
    int main() {
        printf("Hello, C!");
        return 0;
    }`,
  },
  { 
    id: 3,
    value: 'ci++', 
    title: "C++", 
    description: "C++ is an extension of the C programming language designed to provide support for object-oriented programming (OOP), generic programming, and enhanced performance. Developed in the mid-1980s, C++ quickly gained popularity due to its flexibility and efficiency. It is commonly used in developing system software, games, high-performance applications, and large-scale projects. C++ offers features such as classes, templates, inheritance, and polymorphism, allowing developers to write efficient and maintainable code. Despite its complexity, C++ remains a popular choice for projects requiring close interaction with hardware or demanding performance requirements.",
    yearCreated: 1985,
    creator: "Bjarne Stroustrup",
    paradigm: ["Object-oriented programming", "Procedural programming"],
    website: "https://isocpp.org/",
    code: `
    #include <iostream>
    
    int main() {
        std::cout << "Hello, C++!" << std::endl;
        return 0;
    }`
  },
  { 
    id: 4,
    value: 'javascript', 
    title: "JavaScript", 
    description: "JavaScript is a dynamic, interpreted programming language primarily used for building interactive web applications. Developed in the mid-1990s, JavaScript quickly became an essential component of web development alongside HTML and CSS. It is executed on the client-side by web browsers, enabling developers to create dynamic and engaging user interfaces. JavaScript's versatility extends beyond the web, with frameworks like Node.js allowing server-side execution and desktop application development. With features such as closures, prototypes, and asynchronous programming, JavaScript supports various programming paradigms and styles. Despite its initial limitations, modern JavaScript has evolved into a powerful and ubiquitous language powering the web.",
    yearCreated: 1995,
    creator: "No specific creator (Brendan Eich developed the initial implementation)",
    paradigm: ["Object-oriented programming", "Functional programming", "Prototype-based programming"],
    website: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    code: `
    console.log("Hello, JavaScript!");
    `
  },
  { 
    id: 5,
    value: 'python', 
    title: "Python", 
    description: "Python is a high-level, interpreted programming language renowned for its simplicity, readability, and versatility. Developed in the late 1980s, Python emphasizes code readability and ease of use, making it an ideal choice for beginners and experienced developers alike. Python's extensive standard library and third-party packages support a wide range of applications, including web development, data analysis, artificial intelligence, scientific computing, and automation. Its clean and expressive syntax promotes rapid development and encourages best practices. Python's dynamic typing and automatic memory management simplify development, while its comprehensive documentation and active community foster collaboration and innovation. With its growing popularity and widespread adoption, Python has established itself as one of the leading programming languages in various domains.",
    yearCreated: 1991,
    creator: "Guido van Rossum",
    paradigm: ["Object-oriented programming", "Functional programming", "Imperative programming"],
    website: "https://www.python.org/",
    code: `
    print("Hello, Python!");
    `
  }
];


