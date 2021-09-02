<template>
  <div class="home">
    <div class="container  math">
      <div class="row">
        <div style="background-color: yellow;" class="col-3"></div>
        <div class="col-9 p-0 m-0">
          <div class="input">
            <textarea class="textarea" placeholder="enter your text..."></textarea>
          </div>
          <div class="box-output">
            <label class="output">output : 15</label>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>


export default {
  name: 'Home',
  components: {}
}
</script>
<style lang="scss" scoped>
.home {

  .math {
    transform: translate(0%, 10%);

    .input {
      .textarea {
        margin: 5px;
        padding: 10px;
        background-color: whitesmoke;
        width: 90%;
        height: 300px;
        border-radius: 8px;
        border-width: 2px;
        border-color: rgba(0, 110, 255, 0.637);
        border-end-end-radius: 5px;
        color: black;
        font-size: 16px;
        font-family: 'Times New Roman', Times, serif, Georgia, 'Times New Roman', Times, serif;

        &:hover {
          font-size: 17px;
          box-shadow: 1px 1px 5px 1px rgba(0, 110, 255, 0.637);
          border-color: rgba(0, 0, 255, 0.685);
          cursor: pointer;
        }

        &:focus {
          font-size: 17px;
          box-shadow: 1px 1px 2px 1px rgba(0, 110, 255, 0.637);
          background: white;
          border-color: blue;
          outline: none;
          cursor: text;
          overflow-y: scroll;
        }
      }
    }

    .box-output {
      .output {
        margin: 5px;
        padding: 20px;
        background-color: rgba(164, 223, 198, 0.774);
        width: 89.7%;
        height: 300px;
        border-radius: 8px;
        color: black;
        font-size: 18px;
        font-weight: 700;
        font-family: 'Times New Roman', Times, serif, Georgia, 'Times New Roman', Times, serif;
        font-size: 17px;
        box-shadow: 2px 2px 5px 2px rgb(107, 129, 120);
      }
    }
  }
}

::-webkit-scrollbar {
  width: 5px;
}

/* Track */

::-webkit-scrollbar-track {
  background: none;
}

/* Handle */

::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 255, 0.685);
}

/* Handle on hover */

::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 255, 0.685);
}

</style>
