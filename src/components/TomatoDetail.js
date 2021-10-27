import React from "react";
import styled from "@emotion/styled";

const StyledDiv = styled.div`
  flex: 1;
  margin-left: 20px;
  ul {
    list-style: none;
    li {
      margin: 10px 0;
      display: flex;
      justify-content: space-between;
    }
  }
`;

export default function TomatoDetail({ tomato }) {
  return (
    <StyledDiv>
      <h2>{tomato?.description}</h2>
      <ul>
        {tomato?.foodNutrients?.map((fn) => {
          switch (fn.nutrientName) {
            case "Energy":
              return (
                <li>
                  <div>{fn.nutrientName}</div>
                  <div>
                    {fn.value}
                    {fn.unitName}
                  </div>
                </li>
              );
              break;
            case "Carbohydrate, by difference":
              return (
                <li>
                  <div>Carbohydrates</div>
                  <div>
                    {fn.value}
                    {fn.unitName}
                  </div>
                </li>
              );
              break;
            case "Sugars, total including NLEA":
              return (
                <li>
                  <div>Sugars</div>
                  <div>
                    {fn.value}
                    {fn.unitName}
                  </div>
                </li>
              );
              break;
            case "Fiber, total dietary":
              return (
                <li>
                  <div>Dietary fiber</div>
                  {fn.value}
                  {fn.unitName}
                </li>
              );
              break;
            case "Total lipid (fat)":
              return (
                <li>
                  <div>Fat</div>
                  <div>
                    {fn.value}
                    {fn.unitName}
                  </div>
                </li>
              );
              break;
            case "Protein":
              return (
                <li>
                  <div>Protien</div>
                  <div>
                    {fn.value}
                    {fn.unitName}
                  </div>
                </li>
              );
              break;
            case "Water":
              return (
                <li>
                  <div>Water</div>
                  <div>
                    {fn.value}
                    {fn.unitName}
                  </div>
                </li>
              );
              break;
            case "Vitamin A, RAE":
              return (
                <li>
                  <div>Vitamin A equiv</div>
                  <div>
                    {fn.value}
                    {fn.unitName}
                  </div>
                </li>
              );
              break;
            case "Lutein + zeaxanthin":
              return (
                <li>
                  <div>Lutein and zeaxanthin</div>
                  <div>
                    {fn.value}
                    {fn.unitName}
                  </div>
                </li>
              );
              break;
            case "Vitamin C, total ascorbic acid":
              return (
                <li>
                  <div>Vitamin C </div>
                  <div>
                    {fn.value}
                    {fn.unitName}
                  </div>
                </li>
              );
              break;
            case "Vitamin E (alpha-tocopherol)":
              return (
                <li>
                  <div>Vitamin E</div>
                  <div>
                    {fn.value}
                    {fn.unitName}
                  </div>
                </li>
              );
              break;
            case "Potassium, K":
              return (
                <li>
                  <div>Potassium</div>
                  <div>
                    {fn.value}
                    {fn.unitName}
                  </div>
                </li>
              );
              break;
          }
          return null;
        })}
      </ul>
    </StyledDiv>
  );
}
