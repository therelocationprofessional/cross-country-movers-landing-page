const form = document.querySelector('form');

    form.addEventListener('submit', () => {
      const movedte = document.querySelector('#movedte');
      const dateInput = document.querySelector('#date');
      const mmdd = movedte.value.slice(5);
      const yyyy = movedte.value.slice(0, 4);
      const date = `${mmdd}-${yyyy}`;

      dateInput.value = date;
    });