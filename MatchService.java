package com.crick.apis.services;

import com.crick.apis.entities.Match;

import java.util.List;
import java.util.Map;

public interface MatchService {
//get all matches
    List<Match> getAllMatches();

//    get lives matches
    List<Match> getLiveMatches();

//    get cwc23 point table

    List<List<String>> getPointTable();
}
