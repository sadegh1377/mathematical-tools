<template>
  <div class="home">
    <div class="container  math">
      <div class="row">
        <div class="tools p-2 pt-3 m-0 col-md-4 col-sm-5 col-lg-3">


          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne">
                <button class="accordion-button  collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  <b>Simple mathematical</b>
                </button>
              </h2>
              <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                   data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">

                  <button class="btn m-1 btn-outline-info btn-light">
                    <font-awesome-icon icon="divide" aria-hidden="true"/>
                  </button>
                  <button class="btn m-1 btn-outline-info btn-light">
                    <font-awesome-icon icon="times" aria-hidden="true"/>
                  </button>
                  <button class="btn m-1 btn-outline-info btn-light">
                    <font-awesome-icon icon="minus" aria-hidden="true"/>
                  </button>
                  <button class="btn m-1 btn-outline-info btn-light">
                    <font-awesome-icon icon="plus" aria-hidden="true"/>
                  </button>
                  <button class="btn m-1 btn-outline-info btn-light">
                    <font-awesome-icon icon="percent" aria-hidden="true"/>
                  </button>
                  <button class="btn m-1 btn-outline-info btn-light">
                    <font-awesome-icon icon="equals" aria-hidden="true"/>
                  </button>
                  <button class="btn m-1 btn-outline-info btn-light">
                    <font-awesome-icon icon="backspace" aria-hidden="true"/>
                  </button>
                  <button class="btn m-1 btn-outline-info btn-light">
                    <font-awesome-icon icon="eraser" aria-hidden="true"/>
                  </button>

                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                  <b>Mathematical geometric</b>
                </button>
              </h2>
              <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
                   data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">


                  <button title="area square" class="btn m-1 btn-outline-info btn-light">
                    <font-awesome-icon icon="square"/>
                  </button>
                  <button class="btn m-1 btn-outline-info btn-light"><i class="far fa-square"></i></button>
                  <button class="btn m-1 btn-outline-info btn-light">
                    <font-awesome-icon icon="circle"/>
                  </button>
                  <button class="btn m-1 btn-outline-info btn-light"><i class="far fa-circle"></i></button>


                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                  فرمول های جانبی
                </button>
              </h2>
              <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree"
                   data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the
                  <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting
                  happening here in terms of content, but just filling
                  up the space to make it look, at least at first glance, a bit more representative of how this would
                  look in a real-world application. Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing
                  more exciting happening here in terms of content, but just filling up the space to make it look, at
                  least at first glance, a bit more representative of how this would
                  look in a real-world application. Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing
                  more exciting happening
                  here in terms of content, but just filling up the space to make it look, at least at first glance, a
                  bit more representative of how this would look in a real-world application.
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="col-lg-9 col-md-8 col-sm-7  p-0 m-0">
          <div class="input">
            <textarea class="textarea" placeholder="enter your text..."></textarea>
          </div>
          <div class="box-output">
            <label class="output">output : 15


            </label>
            <button class="btn btn-light  btn-lg btn-outline-info pb-3   copy">copy</button>
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

  .logo {
    position: absolute;
    left: 20px;
    top: 10px;
    width: 50px;
    height: 50px;
    box-shadow: 1px 1px 3px 1px rgba(138, 58, 58, 0.582);
    opacity: 0.9;

    &:hover {
      width: 53px;
      height: 53px;
      box-shadow: 1px 1px 5px 2px rgba(138, 58, 58, 0.877);
      opacity: 1;
    }
  }

  .math {
    transform: translate(5%, 11%);

    .tools {
      background-color: white;
      border-radius: 15px;
      border-color: rgb(66, 60, 49);
      border-width: 1px !important;
      box-shadow: 1px 1px 3px 1px rgba(20, 158, 151, 0.445);

      .accordion-body {
        max-height: 350px;
        overflow-y: scroll;
        list-style: none;
        padding: none;
        margin: none;

        .btn {
          text-align: center !important;
          width: 40px !important;

          &:hover {
            box-shadow: 1px 1px 2px 1px #0d7180af;
            color: white !important;
          }
        }
      }
    }

    .input {
      .textarea {
        margin: 5px;
        padding: 25px;
        background-color: whitesmoke;
        width: 90%;
        min-height: 300px;
        max-height: 333px;
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
          font-size: 20px;
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
      position: relative;

      .output {
        border-style: solid;
        border-color: rgba(78, 180, 138, 0.959);
        border-width: 2px;
        margin: 5px;
        padding: 30px;
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

      .copy {
        position: absolute;
        right: 120px;
        bottom: 25px;
        text-align: center;

        &:hover {
          box-shadow: 1px 1px 2px 1px #0d7180af;
          color: white !important;
        }
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
