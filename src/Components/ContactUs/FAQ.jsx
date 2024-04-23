import { useState } from "react";
import Questions_Answers from "./Questions_Answers";
function FAQ() {
  return (
    <div className="bg-blue-200 overflow-y-scroll" style={{ height: "415px" }}>
      <h1 className="text-center text-3xl">Frequestly Asked Questions</h1>
      <div>
        <Questions_Answers
          Question={"What is React.js ?"}
          Answer={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quod aliquid, laboriosam quia recusandae velit possimus! Consequuntur fugit ab repellendus, assumenda voluptatem sapiente dolor aliquid ipsam consectetur praesentium eos odio alias eius voluptatum quibusdam ut perferendis distinctio tempora facilis quas quo, necessitatibus similique suscipit. At, repellendus! Vitae dolores sit dicta?"
          }
        />
        <Questions_Answers
          Question={"What is React.js ?"}
          Answer={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quod aliquid, laboriosam quia recusandae velit possimus! Consequuntur fugit ab repellendus, assumenda voluptatem sapiente dolor aliquid ipsam consectetur praesentium eos odio alias eius voluptatum quibusdam ut perferendis distinctio tempora facilis quas quo, necessitatibus similique suscipit. At, repellendus! Vitae dolores sit dicta?"
          }
        />
        <Questions_Answers
          Question={"What is React.js ?"}
          Answer={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quod aliquid, laboriosam quia recusandae velit possimus! Consequuntur fugit ab repellendus, assumenda voluptatem sapiente dolor aliquid ipsam consectetur praesentium eos odio alias eius voluptatum quibusdam ut perferendis distinctio tempora facilis quas quo, necessitatibus similique suscipit. At, repellendus! Vitae dolores sit dicta?"
          }
        />
        <Questions_Answers
          Question={"What is React.js ?"}
          Answer={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quod aliquid, laboriosam quia recusandae velit possimus! Consequuntur fugit ab repellendus, assumenda voluptatem sapiente dolor aliquid ipsam consectetur praesentium eos odio alias eius voluptatum quibusdam ut perferendis distinctio tempora facilis quas quo, necessitatibus similique suscipit. At, repellendus! Vitae dolores sit dicta?"
          }
        />
      </div>
    </div>
  );
}

export default FAQ;
