const stories = ["Sweethearts was mine and Kenna's first date! We went on our day date on February 4th. We went to the Rush FunPlex in Syracuse. It was so much fun! We played mini golf, we bowled, and we got ice cream! After that date, I knew I had a crush on Kenna. The dance was on February 11th. I was so nervous for Kenna to pick me up. But, as soon as she came to the door, I was not nervous anymore. For some reason, I felt really comfortable around her. I liked Kenna a lot and she looked so cute in her white Sweethearts dress!",];
const images = ["/images/memories/1.jpeg"];

let Container = document.getElementById("container");

let count = 0;

stories.forEach(mems);


function mems() {

    count += 1;

    let holder = document.createElement("div");
    let story = document.createElement("p");
    let Image = document.createElement("img");

    story.textContent = stories[count - 1];
    Image.setAttribute("src", images[count - 1]);

    Image.className = "memsimg";
    holder.className = "holder";

    Container.appendChild(holder);
    holder.appendChild(Image);
    holder.appendChild(story);
}