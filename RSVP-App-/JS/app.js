document.addEventListener("DOMContentLoaded", () => {
  /****************************Declare Variables**************************************/

  const form = document.getElementById("registrar");
  const input = document.querySelector("input");
  const mainDiv = document.querySelector(".main");
  const ul = document.getElementById("invitedList");
  const div = document.createElement("div");
  const filterLabel = document.createElement("label");
  const filterCheckbox = document.createElement("input");

  /********************Place Show/Hide Checkbox Element********************/

  filterLabel.innerHTML = "Hide those who haven't responded";
  filterCheckbox.type = "checkbox";

  div.appendChild(filterLabel);
  div.appendChild(filterCheckbox);

  mainDiv.insertBefore(div, ul);

  /*************************Add Event Handlers*****************************************/

  /******************Show/Hide Checkbox Event Handler**********************/

  filterCheckbox.addEventListener("change", (e) => {
    const isChecked = e.target.checked;
    const lis = ul.children;
    if (isChecked) {
      for (i = 0; i < lis.length; i++) {
        let li = lis[i];
        if (li.className == "responded") {
          li.style.display = "";
        } else {
          li.style.display = "none";
        }
      }
    } else {
      for (i = 0; i < lis.length; i++) {
        let li = lis[i];
        li.style.display = "";
      }
    }
  });

  /******************Submit Button Event Handler**********************/

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = input.value;
    const li = document.createElement("li");

    const createElement = (element, property, value) => {
      const newElement = document.createElement(element);
      newElement[property] = value;
      return newElement;
    };

    const appendToLi = (element, property, value) => {
      const newElement = createElement(element, property, value);
      li.appendChild(newElement);
      return newElement;
    };

    appendToLi("span", "innerHTML", text);
    
    const labelBox = appendToLi("label", "innerHTML", "Confirmed");
    const cbox = createElement("input", "type", "checkbox");
    labelBox.appendChild(cbox);
    
    appendToLi("button", "innerHTML", "remove");
    appendToLi("button", "innerHTML", "edit");

    ul.appendChild(li);
    input.value = "";
  });

  /******************************RSVP Button Event Handler************************************/

  ul.addEventListener("change", (e) => {
    const checkbox = e.target;
    const checked = checkbox.checked;
    const listItem = checkbox.parentNode.parentNode;

    if (checked) {
      listItem.className = "responded";
    } else {
      listItem.className = " ";
    }
  });

  /*****************Event Handler For Edit Button/State And Remove Button***********************/

  ul.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const button = e.target;
      const li = button.parentNode;
      const ul = li.parentNode;
      const action = button.innerHTML;

      const nameActions = {
        remove : () => {
          ul.removeChild(li);
        },
        edit : () => {
          const span = li.firstElementChild;
          const input = document.createElement('input');
          input.type = "text";
          input.value = span.innerHTML;
          li.insertBefore(input, span);
          li.removeChild(span);
          button.innerHTML = 'save';
          console.log(li, input);
        },
        save : () => {
          const input = li.firstElementChild;
          const span = document.createElement('span');
          span.innerHTML = input.value;
          li.insertBefore(span, input);
          li.removeChild(input);
          button.innerHTML = 'edit';
          console.log(li, span);
        }
      };

      nameActions[action]();
  }
})
});
