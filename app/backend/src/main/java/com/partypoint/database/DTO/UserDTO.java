package com.partypoint.database.DTO;

import com.partypoint.database.Genre;

import java.util.Set;

public record UserDTO (String username,
                       String email,
                       Set<Genre> genres,
                       String password) {
}
