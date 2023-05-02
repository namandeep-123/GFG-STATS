import * as cheerio from "cheerio";
import { Request, Response } from "express";
import axios from "axios";
import {
  ADD_USER_NAME,
  DATA_FETCHED_SUCCESSFULLY,
  ERROR,
  GET_DATA_FROM_GFG_TAG,
  INTERNAL_SERVER_ERROR,
  INVALID_USER_NAME,
  PROBLEM_LIST,
  SUCCESS,
  TOTAL_PROBLEM_SOLVED,
  USER_NAME,
} from "./constants";
export const getGFGStats = async (req: Request, res: Response) => {
  try {
    const userName = req.query.userName as string;
    console.log(req.query);
    console.log(userName);
    if (!userName) {
      return res.status(400).send({
        status: ERROR,
        message: ADD_USER_NAME,
      });
    }

    const url = `https://auth.geeksforgeeks.org/user/${userName}/practice/`;

    const html: string = await axios
      .get(url)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        console.log(err);
      });
    const $ = cheerio.load(html);
    let data = $(GET_DATA_FROM_GFG_TAG);
    console.log(typeof data);
    if (!data.length) {
      return res.status(400).send({
        status: ERROR,
        message: INVALID_USER_NAME,
      });
    }
    let totalProblemSolved: number = 0;
    let values: Object = {};
    let problemDifficultyTag = PROBLEM_LIST;
    let k = 0;
    let rawData = $(data[0]).text();
    for (let i = 0; i < rawData.length; i++) {
      if (rawData[i] == "(") {
        let tempStart = i + 1;
        while (rawData[i] != ")") {
          i++;
        }
        let tempProblems = parseInt(rawData.substring(tempStart, i));
        values[problemDifficultyTag[k++]] = tempProblems;
        totalProblemSolved += tempProblems;
      }
    }

    values[TOTAL_PROBLEM_SOLVED] = totalProblemSolved;
    values[USER_NAME] = userName;
    return res.status(200).send({
      status: SUCCESS,
      message: DATA_FETCHED_SUCCESSFULLY,
      data: values,
    });
  } catch (err) {
    const error = err as Error;
    return res.status(500).send({
      status: ERROR,
      message: INTERNAL_SERVER_ERROR,
      error: error,
    });
  }
};
