--
-- PostgreSQL database dump
--

-- Dumped from database version 12.2
-- Dumped by pg_dump version 12.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: sightings; Type: TABLE; Schema: public; Owner: me
--

CREATE TABLE public.sightings (
    specie_health text,
    location_sighted text,
    tracked_specie_id integer NOT NULL,
    date_sighted date DEFAULT CURRENT_DATE
);


ALTER TABLE public.sightings OWNER TO me;

--
-- Name: sightings_tracked_specie_id_seq1; Type: SEQUENCE; Schema: public; Owner: me
--

CREATE SEQUENCE public.sightings_tracked_specie_id_seq1
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.sightings_tracked_specie_id_seq1 OWNER TO me;

--
-- Name: sightings_tracked_specie_id_seq1; Type: SEQUENCE OWNED BY; Schema: public; Owner: me
--

ALTER SEQUENCE public.sightings_tracked_specie_id_seq1 OWNED BY public.sightings.tracked_specie_id;


--
-- Name: species; Type: TABLE; Schema: public; Owner: me
--

CREATE TABLE public.species (
    specie_id integer NOT NULL,
    common_name character varying(30),
    scientific_name character varying(30),
    num_living integer,
    conservation_status character varying(30),
    date_created date DEFAULT CURRENT_DATE NOT NULL
);


ALTER TABLE public.species OWNER TO me;

--
-- Name: species_specie_id_seq; Type: SEQUENCE; Schema: public; Owner: me
--

CREATE SEQUENCE public.species_specie_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.species_specie_id_seq OWNER TO me;

--
-- Name: species_specie_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: me
--

ALTER SEQUENCE public.species_specie_id_seq OWNED BY public.species.specie_id;


--
-- Name: tracked_species; Type: TABLE; Schema: public; Owner: me
--

CREATE TABLE public.tracked_species (
    tracked_specie_id integer NOT NULL,
    nickname character varying(30),
    specie_id integer NOT NULL,
    sighters_email character varying(30),
    date_sighted date DEFAULT CURRENT_DATE
);


ALTER TABLE public.tracked_species OWNER TO me;

--
-- Name: tracked_species_specie_id_seq; Type: SEQUENCE; Schema: public; Owner: me
--

CREATE SEQUENCE public.tracked_species_specie_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tracked_species_specie_id_seq OWNER TO me;

--
-- Name: tracked_species_specie_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: me
--

ALTER SEQUENCE public.tracked_species_specie_id_seq OWNED BY public.tracked_species.specie_id;


--
-- Name: tracked_species_tracked_specie_id_seq; Type: SEQUENCE; Schema: public; Owner: me
--

CREATE SEQUENCE public.tracked_species_tracked_specie_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tracked_species_tracked_specie_id_seq OWNER TO me;

--
-- Name: tracked_species_tracked_specie_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: me
--

ALTER SEQUENCE public.tracked_species_tracked_specie_id_seq OWNED BY public.tracked_species.tracked_specie_id;


--
-- Name: sightings tracked_specie_id; Type: DEFAULT; Schema: public; Owner: me
--

ALTER TABLE ONLY public.sightings ALTER COLUMN tracked_specie_id SET DEFAULT nextval('public.sightings_tracked_specie_id_seq1'::regclass);


--
-- Name: species specie_id; Type: DEFAULT; Schema: public; Owner: me
--

ALTER TABLE ONLY public.species ALTER COLUMN specie_id SET DEFAULT nextval('public.species_specie_id_seq'::regclass);


--
-- Name: tracked_species tracked_specie_id; Type: DEFAULT; Schema: public; Owner: me
--

ALTER TABLE ONLY public.tracked_species ALTER COLUMN tracked_specie_id SET DEFAULT nextval('public.tracked_species_tracked_specie_id_seq'::regclass);


--
-- Name: tracked_species specie_id; Type: DEFAULT; Schema: public; Owner: me
--

ALTER TABLE ONLY public.tracked_species ALTER COLUMN specie_id SET DEFAULT nextval('public.tracked_species_specie_id_seq'::regclass);


--
-- Data for Name: sightings; Type: TABLE DATA; Schema: public; Owner: me
--

COPY public.sightings (specie_health, location_sighted, tracked_specie_id, date_sighted) FROM stdin;
missing claw	Tahiti	1	2020-03-11
good health	Istanbul, Turkey	2	2020-03-11
chipped beak	New Orleans	3	2020-03-11
good health	San Juan Costa Rica	4	2020-03-11
missing left eye	Armenia	2	2020-03-11
Good	Orlando Florida	1	\N
\.


--
-- Data for Name: species; Type: TABLE DATA; Schema: public; Owner: me
--

COPY public.species (specie_id, common_name, scientific_name, num_living, conservation_status, date_created) FROM stdin;
1	Tahiti reed warbler	acrocephalus caffer	350	EN	2020-03-11
2	Pleske's racerrunner	eramias pleskei	500	CR	2020-03-11
3	brown pelican	pelicanus occidentalis	10000	VU	2020-03-11
4	Ethiopian banana frog	Afrixalus enseticola	2000	VU	2020-03-11
\.


--
-- Data for Name: tracked_species; Type: TABLE DATA; Schema: public; Owner: me
--

COPY public.tracked_species (tracked_specie_id, nickname, specie_id, sighters_email, date_sighted) FROM stdin;
1	warbler songbird	1	example1@gmail.com	2020-03-11
2	Lizzy the lizard	2	example2@gmail.com	2020-03-11
3	Pesky pelican	3	example3@gmail.com	2020-03-11
4	nana frog	4	example4@gmail.com	2020-03-11
\.


--
-- Name: sightings_tracked_specie_id_seq1; Type: SEQUENCE SET; Schema: public; Owner: me
--

SELECT pg_catalog.setval('public.sightings_tracked_specie_id_seq1', 5, true);


--
-- Name: species_specie_id_seq; Type: SEQUENCE SET; Schema: public; Owner: me
--

SELECT pg_catalog.setval('public.species_specie_id_seq', 8, true);


--
-- Name: tracked_species_specie_id_seq; Type: SEQUENCE SET; Schema: public; Owner: me
--

SELECT pg_catalog.setval('public.tracked_species_specie_id_seq', 1, true);


--
-- Name: tracked_species_tracked_specie_id_seq; Type: SEQUENCE SET; Schema: public; Owner: me
--

SELECT pg_catalog.setval('public.tracked_species_tracked_specie_id_seq', 5, true);


--
-- Name: species species_pkey; Type: CONSTRAINT; Schema: public; Owner: me
--

ALTER TABLE ONLY public.species
    ADD CONSTRAINT species_pkey PRIMARY KEY (specie_id);


--
-- Name: tracked_species tracked_species_pkey; Type: CONSTRAINT; Schema: public; Owner: me
--

ALTER TABLE ONLY public.tracked_species
    ADD CONSTRAINT tracked_species_pkey PRIMARY KEY (tracked_specie_id);


--
-- Name: tracked_species specie_id; Type: FK CONSTRAINT; Schema: public; Owner: me
--

ALTER TABLE ONLY public.tracked_species
    ADD CONSTRAINT specie_id FOREIGN KEY (specie_id) REFERENCES public.species(specie_id) ON DELETE CASCADE;


--
-- Name: sightings tracked_specie_id; Type: FK CONSTRAINT; Schema: public; Owner: me
--

ALTER TABLE ONLY public.sightings
    ADD CONSTRAINT tracked_specie_id FOREIGN KEY (tracked_specie_id) REFERENCES public.tracked_species(tracked_specie_id);


--
-- PostgreSQL database dump complete
--

