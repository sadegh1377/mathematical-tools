<template>
    <div class="home">
        <img src="../assets/multimedia/b&s (5).png" alt="logo" class="logo" id="Sadegh & Bagher">
        <div class="container  math">
            <div class="row">
                <div class="tools p-2 pt-3 m-0 col-md-4 col-sm-5 col-lg-3">


                    <div class="accordion accordion-flush" id="accordionFlushExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingOne">
                                <button class="accordion-button  collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseOne" aria-expanded="false"
                                        aria-controls="flush-collapseOne">
                                    <b>Simple mathematical</b>
                                </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse"
                                 aria-labelledby="flush-headingOne"
                                 data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">

                                    <button @click="getOperate('/')" class="btn m-1 btn-outline-info btn-light">
                                        <font-awesome-icon icon="divide" aria-hidden="true"/>
                                    </button>
                                    <button @click="getOperate('*')" class="btn m-1 btn-outline-info btn-light">
                                        <font-awesome-icon icon="times" aria-hidden="true"/>
                                    </button>
                                    <button @click="getOperate('-')" class="btn m-1 btn-outline-info btn-light">
                                        <font-awesome-icon icon="minus" aria-hidden="true"/>
                                    </button>
                                    <button @click="getOperate('+')" class="btn m-1 btn-outline-info btn-light">
                                        <font-awesome-icon icon="plus" aria-hidden="true"/>
                                    </button>
                                    <button @click="getOperate('%')" class="btn m-1 btn-outline-info btn-light">
                                        <font-awesome-icon icon="percent" aria-hidden="true"/>
                                    </button>
                                    <button @click="equal" class="btn m-1 btn-outline-info btn-light">
                                        <font-awesome-icon icon="equals" aria-hidden="true"/>
                                    </button>
                                    <button @click="deleteJustOne" class="btn m-1 btn-outline-info btn-light">
                                        <font-awesome-icon icon="backspace" aria-hidden="true"/>
                                    </button>
                                    <button @click="deleteAll" class="btn m-1 btn-outline-info btn-light">
                                        <font-awesome-icon icon="eraser" aria-hidden="true"/>
                                    </button>

                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseTwo" aria-expanded="false"
                                        aria-controls="flush-collapseTwo">
                                    <b>Mathematical geometric</b>
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse collapse"
                                 aria-labelledby="flush-headingTwo"
                                 data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">


                                    <button @click="showModal = true,figure_type_selector('square')" title="area square"
                                            class="btn m-1 btn-outline-info btn-light">
                                        <font-awesome-icon icon="square"/>
                                    </button>
                                    <button @click="showModal = true,figure_type_selector('rectagle')"
                                            class="btn m-1 btn-outline-info btn-light"><i class="far fa-square"></i>
                                    </button>
                                    <button @click="showModal = true,figure_type_selector('triangle')"
                                            class="btn m-1 btn-outline-info btn-light">
                                        <font-awesome-icon icon="circle"/>
                                    </button>
                                    <button @click="showModal = true,figure_type_selector('circle')"
                                            class="btn m-1 btn-outline-info btn-light"><i class="far fa-circle"></i>
                                    </button>
                                    <button @click="showModal = true,figure_type_selector('parallelogram')"
                                            class="btn m-1 btn-outline-info btn-light"><i class="far fa-circle"></i>
                                    </button>
                                    <button @click="showModal = true,figure_type_selector('trapezius')"
                                            class="btn m-1 btn-outline-info btn-light"><i class="far fa-circle"></i>
                                    </button>


                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseThree" aria-expanded="false"
                                        aria-controls="flush-collapseThree">
                                    فرمول های جانبی
                                </button>
                            </h2>
                            <div id="flush-collapseThree" class="accordion-collapse collapse"
                                 aria-labelledby="flush-headingThree"
                                 data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">Placeholder content for this accordion, which is intended to
                                    demonstrate the
                                    <code>.accordion-flush</code> class. This is the third item's accordion body.
                                    Nothing more exciting
                                    happening here in terms of content, but just filling
                                    up the space to make it look, at least at first glance, a bit more representative of
                                    how this would
                                    look in a real-world application. Placeholder content for this accordion, which is
                                    intended to
                                    demonstrate the <code>.accordion-flush</code> class. This is the third item's
                                    accordion body. Nothing
                                    more exciting happening here in terms of content, but just filling up the space to
                                    make it look, at
                                    least at fifffffffrst glance, a bit more representative of how this would
                                    look in a real-world application. Placeholder content for this accordion, which is
                                    intended to
                                    demonstrate the <code>.accordion-flush</code> class. This is the third item's
                                    accordion body. Nothing
                                    more exciting happening
                                    here in terms of content, but just filling up the space to make it look, at least at
                                    first glance, a
                                    bit more representative of how this would look in a real-world application.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="col-lg-9 col-md-8 col-sm-7  p-0 m-0">
                    <div class="input">
                        <textarea v-model="inputNum" @keyup.enter="equal" class="textarea"
                                  placeholder="enter your text..."></textarea>
                    </div>
                    <div class="box-output">
                        <label class="output">output : <span v-for="item in answer">
                            {{item}} ,
                        </span>


                        </label>
                        <button class="btn btn-light  btn-lg btn-outline-info pb-3  copy">copy</button>
                    </div>
                </div>
            </div>

        </div>
        <div class="overlay" v-if="showModal" @click="showModal = false"></div>

        <!-- modal -->
        <div class="modal" v-if="showModal">
            <button class="close btn-close" @click="showModal = false"></button>
            <h3> Area {{figure_type}}</h3>
            <hr>
            <label v-if="figure_type==='square'">enter number:</label><br v-if="figure_type==='square'">
            <input v-if="figure_type==='square'" v-model="figure_size.width" min="1">
            <label v-if="figure_type==='rectagle'">enter numbers:</label><br v-if="figure_type==='rectagle'">
            <input v-if="figure_type==='rectagle'" v-model="figure_size.width" min="1">
            <input v-if="figure_type==='rectagle'" v-model="figure_size.length" min="1">
            <label v-if="figure_type==='triangle'">enter numbers:</label><br v-if="figure_type==='triangle'">
            <input v-if="figure_type==='triangle'" v-model="figure_size.multiWidth[0]" min="1">
            <input v-if="figure_type==='triangle'" v-model="figure_size.multiWidth[1]" min="1">
            <input v-if="figure_type==='triangle'" v-model="figure_size.multiWidth[2]" min="1">
            <label v-if="figure_type==='circle'">enter number:</label><br v-if="figure_type==='circle'">
            <input v-if="figure_type==='circle'" v-model="figure_size.radius" min="1">
            <label v-if="figure_type==='parallelogram' || figure_type==='trapezius'">enter numbers:</label><br
                v-if="figure_type==='parallelogram' || figure_type==='trapezius'">
            <input v-if="figure_type==='parallelogram' || figure_type==='trapezius'" v-model="figure_size.width"
                   min="1">
            <input v-if="figure_type==='parallelogram' || figure_type==='trapezius'" v-model="figure_size.width"
                   min="1">
            <input placeholder="..." v-if="figure_type==='parallelogram' || figure_type==='trapezius'"
                   v-model="figure_size.width"
                   min="1">
            <input v-if="figure_type==='parallelogram' || figure_type==='trapezius'" v-model="figure_size.width"
                   min="1">
            <button class="btn btn-light  btn-lg btn-outline-info" type="submit" @click="area()">submit</button>
            <label v-if="temp!==0">{{temp}}</label>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'Home',
        data() {
            return {
                inputNum: "",
                answer: [],
                temp: 0,
                showModal: false,
                side_square: "",
                figure_type: '',
                figure_size: {
                    height: '',//ارتفاع
                    width: '',//عرض
                    length: '',//طول
                    radius: '',//شعاع
                    width_large: '',
                    width_small: '',
                    multiWidth: []//برای اشکالی که بیشتر از دو یا چند قاعده دارند
                }
            }
        },
        methods: {

            area() {
                if (this.figure_type === 'square') {
                    this.temp = this.figure_size.width * 4;
                    this.answer.push(this.temp)
                }
                if (this.figure_type === 'rectagle') {
                    this.temp = this.figure_size.width * 2 + this.figure_size.length * 2;
                    this.answer.push(this.temp)
                }
                if (this.figure_type === 'triangle') {
                    this.temp = this.figure_size.multiWidth[0] + this.figure_size.multiWidth[2] + this.figure_size.multiWidth[1];
                    this.answer.push(this.temp)
                }
                if (this.figure_type === 'parallelogram' || this.figure_type === 'trapezius') {
                    this.temp = this.figure_size.multiWidth[0] + this.figure_size.multiWidth[1] + this.figure_size.multiWidth[2] + this.figure_size.multiWidth[3];
                    this.answer.push(this.temp)
                }
                if (this.figure_type === 'circle') {
                    this.temp = 2 * this.figure_size.radius * Math.PI;
                    this.answer.push(this.temp)
                }


            },
            figure_type_selector(f_type) {

                this.figure_type = f_type;
                console.log(this.figure_type)
            },


            getOperate(element) {
                if (this.inputNum.charAt(0) === "0") {
                    this.inputNum = ""
                }
                // if (this.inputNum.length < 9) {
                this.inputNum += element;

                // } else {}
            },
            square() {
                eval(this.inputNum) < 0 ? this.answer = "Can not suqre the negative value"
                    : this.answer.push(Math.sqrt(eval(this.inputNum)));
            },


            equal() {
                if (this.answer.length < 10) {
                    this.answer.push(eval(this.inputNum));
                    console.log(this.answer)
                } else {
                    this.answer = []
                }

            },


            deleteAll() {
                this.inputNum = "";
                this.answer = [];
                console.log(this.answer)

            },


            deleteJustOne() {
                this.inputNum = this.inputNum.slice(0, -1);
            },
        },

        components: {}
    }
</script>
<style lang="scss" scoped>
    .home {
        height: 100vh;
        direction: ltr;
        text-align: left;
        position: relative;

        .logo {
            position: absolute;
            background-color: transparent;
            left: 20px;
            top: 10px;
            width: 50px;
            height: 50px;
            // box-shadow: 1px 1px 3px 1px rgba(138, 58, 58, 0.582);
            opacity: 0.9;

            &:hover {
                width: 53px;
                height: 53px;
                box-shadow: 1px 1px 5px 2px rgba(138, 58, 58, 0.877);
                border-radius: 50%;
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
                    padding: 5px;
                    margin: 0px;

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

    .overlay {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
    }

    .modal {
        position: absolute;
        left: 40%;
        top: 20%;
        width: 400px;
        height: auto;
        z-index: 9999;
        border-radius: 15px;

        margin: 0 auto;
        padding: 20px 30px;
        display: block !important;
        background-color: #97d7d0;

        label {

            font-family: 'Times New Roman', Times, serif, Georgia, 'Times New Roman', Times, serif;
            font-weight: 500;
            font-size: 19px;
        }


        h3 {
            font-family: 'Times New Roman', Times, serif, Georgia, 'Times New Roman', Times, serif;
            display: inline-block;

        }

        input {
            border-radius: 5px;
            background-color: #2d47fa;
            color: #fffdfe;
            outline: none;
            margin: 3.5px;
            height: 43px;
            width: 250px;

            &:focus {
                background-color: #202b91;
                color: #fffdfe;
                outline: none;
            }

        }

        button {
            display: block;
            margin-top: 20px;
        }

    }

    .close {
        position: absolute;
        top: 10px;
        right: 10px;
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
