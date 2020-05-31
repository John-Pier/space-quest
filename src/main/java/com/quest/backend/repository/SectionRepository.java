package com.quest.backend.repository;

import com.quest.backend.entity.Section;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface SectionRepository extends JpaRepository<Section, UUID> {
    @Query(value = "SELECT UUID FROM section", nativeQuery = true)
    List<String> getAllId();
}

