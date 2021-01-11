--
-- PostgreSQL database cluster dump
--

SET default_transaction_read_only = off;

SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;

--
-- Drop databases (except postgres and template1)
--

DROP DATABASE blogs_manager;




--
-- Drop roles
--

DROP ROLE adam;


--
-- Roles
--

CREATE ROLE adam;
ALTER ROLE adam WITH SUPERUSER INHERIT CREATEROLE CREATEDB LOGIN REPLICATION BYPASSRLS PASSWORD 'md56682f94b61afe82caa432b21478de3fe';






--
-- Databases
--

--
-- Database "template1" dump
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 13.1 (Debian 13.1-1.pgdg100+1)
-- Dumped by pg_dump version 13.1 (Debian 13.1-1.pgdg100+1)

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

UPDATE pg_catalog.pg_database SET datistemplate = false WHERE datname = 'template1';
DROP DATABASE template1;
--
-- Name: template1; Type: DATABASE; Schema: -; Owner: adam
--

CREATE DATABASE template1 WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.utf8';


ALTER DATABASE template1 OWNER TO adam;

\connect template1

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

--
-- Name: DATABASE template1; Type: COMMENT; Schema: -; Owner: adam
--

COMMENT ON DATABASE template1 IS 'default template for new databases';


--
-- Name: template1; Type: DATABASE PROPERTIES; Schema: -; Owner: adam
--

ALTER DATABASE template1 IS_TEMPLATE = true;


\connect template1

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

--
-- Name: DATABASE template1; Type: ACL; Schema: -; Owner: adam
--

REVOKE CONNECT,TEMPORARY ON DATABASE template1 FROM PUBLIC;
GRANT CONNECT ON DATABASE template1 TO PUBLIC;


--
-- PostgreSQL database dump complete
--

--
-- Database "blogs_manager" dump
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 13.1 (Debian 13.1-1.pgdg100+1)
-- Dumped by pg_dump version 13.1 (Debian 13.1-1.pgdg100+1)

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

--
-- Name: blogs_manager; Type: DATABASE; Schema: -; Owner: adam
--

CREATE DATABASE blogs_manager WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.utf8';


ALTER DATABASE blogs_manager OWNER TO adam;

\connect blogs_manager

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
-- Name: auth_group; Type: TABLE; Schema: public; Owner: adam
--

CREATE TABLE public.auth_group (
    id integer NOT NULL,
    name character varying(150) NOT NULL
);


ALTER TABLE public.auth_group OWNER TO adam;

--
-- Name: auth_group_id_seq; Type: SEQUENCE; Schema: public; Owner: adam
--

CREATE SEQUENCE public.auth_group_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_group_id_seq OWNER TO adam;

--
-- Name: auth_group_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: adam
--

ALTER SEQUENCE public.auth_group_id_seq OWNED BY public.auth_group.id;


--
-- Name: auth_group_permissions; Type: TABLE; Schema: public; Owner: adam
--

CREATE TABLE public.auth_group_permissions (
    id integer NOT NULL,
    group_id integer NOT NULL,
    permission_id integer NOT NULL
);


ALTER TABLE public.auth_group_permissions OWNER TO adam;

--
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: adam
--

CREATE SEQUENCE public.auth_group_permissions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_group_permissions_id_seq OWNER TO adam;

--
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: adam
--

ALTER SEQUENCE public.auth_group_permissions_id_seq OWNED BY public.auth_group_permissions.id;


--
-- Name: auth_permission; Type: TABLE; Schema: public; Owner: adam
--

CREATE TABLE public.auth_permission (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    content_type_id integer NOT NULL,
    codename character varying(100) NOT NULL
);


ALTER TABLE public.auth_permission OWNER TO adam;

--
-- Name: auth_permission_id_seq; Type: SEQUENCE; Schema: public; Owner: adam
--

CREATE SEQUENCE public.auth_permission_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_permission_id_seq OWNER TO adam;

--
-- Name: auth_permission_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: adam
--

ALTER SEQUENCE public.auth_permission_id_seq OWNED BY public.auth_permission.id;


--
-- Name: auth_user; Type: TABLE; Schema: public; Owner: adam
--

CREATE TABLE public.auth_user (
    id integer NOT NULL,
    password character varying(128) NOT NULL,
    last_login timestamp with time zone,
    is_superuser boolean NOT NULL,
    username character varying(150) NOT NULL,
    first_name character varying(150) NOT NULL,
    last_name character varying(150) NOT NULL,
    email character varying(254) NOT NULL,
    is_staff boolean NOT NULL,
    is_active boolean NOT NULL,
    date_joined timestamp with time zone NOT NULL
);


ALTER TABLE public.auth_user OWNER TO adam;

--
-- Name: auth_user_groups; Type: TABLE; Schema: public; Owner: adam
--

CREATE TABLE public.auth_user_groups (
    id integer NOT NULL,
    user_id integer NOT NULL,
    group_id integer NOT NULL
);


ALTER TABLE public.auth_user_groups OWNER TO adam;

--
-- Name: auth_user_groups_id_seq; Type: SEQUENCE; Schema: public; Owner: adam
--

CREATE SEQUENCE public.auth_user_groups_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_user_groups_id_seq OWNER TO adam;

--
-- Name: auth_user_groups_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: adam
--

ALTER SEQUENCE public.auth_user_groups_id_seq OWNED BY public.auth_user_groups.id;


--
-- Name: auth_user_id_seq; Type: SEQUENCE; Schema: public; Owner: adam
--

CREATE SEQUENCE public.auth_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_user_id_seq OWNER TO adam;

--
-- Name: auth_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: adam
--

ALTER SEQUENCE public.auth_user_id_seq OWNED BY public.auth_user.id;


--
-- Name: auth_user_user_permissions; Type: TABLE; Schema: public; Owner: adam
--

CREATE TABLE public.auth_user_user_permissions (
    id integer NOT NULL,
    user_id integer NOT NULL,
    permission_id integer NOT NULL
);


ALTER TABLE public.auth_user_user_permissions OWNER TO adam;

--
-- Name: auth_user_user_permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: adam
--

CREATE SEQUENCE public.auth_user_user_permissions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_user_user_permissions_id_seq OWNER TO adam;

--
-- Name: auth_user_user_permissions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: adam
--

ALTER SEQUENCE public.auth_user_user_permissions_id_seq OWNED BY public.auth_user_user_permissions.id;


--
-- Name: blogs_blog; Type: TABLE; Schema: public; Owner: adam
--

CREATE TABLE public.blogs_blog (
    id integer NOT NULL,
    name character varying(200) NOT NULL,
    url character varying(200) NOT NULL,
    author character varying(100) NOT NULL,
    genre character varying(30) NOT NULL,
    genre2 character varying(30) NOT NULL,
    language character varying(100) NOT NULL
);


ALTER TABLE public.blogs_blog OWNER TO adam;

--
-- Name: blogs_blog_id_seq; Type: SEQUENCE; Schema: public; Owner: adam
--

CREATE SEQUENCE public.blogs_blog_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.blogs_blog_id_seq OWNER TO adam;

--
-- Name: blogs_blog_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: adam
--

ALTER SEQUENCE public.blogs_blog_id_seq OWNED BY public.blogs_blog.id;


--
-- Name: blogs_blogphoto; Type: TABLE; Schema: public; Owner: adam
--

CREATE TABLE public.blogs_blogphoto (
    id integer NOT NULL,
    photo character varying(100) NOT NULL,
    blog_id integer NOT NULL
);


ALTER TABLE public.blogs_blogphoto OWNER TO adam;

--
-- Name: blogs_blogphoto_id_seq; Type: SEQUENCE; Schema: public; Owner: adam
--

CREATE SEQUENCE public.blogs_blogphoto_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.blogs_blogphoto_id_seq OWNER TO adam;

--
-- Name: blogs_blogphoto_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: adam
--

ALTER SEQUENCE public.blogs_blogphoto_id_seq OWNED BY public.blogs_blogphoto.id;


--
-- Name: blogs_blogpost; Type: TABLE; Schema: public; Owner: adam
--

CREATE TABLE public.blogs_blogpost (
    id integer NOT NULL,
    name character varying(200) NOT NULL,
    url character varying(200) NOT NULL,
    added timestamp with time zone NOT NULL,
    blog_id integer NOT NULL
);


ALTER TABLE public.blogs_blogpost OWNER TO adam;

--
-- Name: blogs_blogpost_id_seq; Type: SEQUENCE; Schema: public; Owner: adam
--

CREATE SEQUENCE public.blogs_blogpost_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.blogs_blogpost_id_seq OWNER TO adam;

--
-- Name: blogs_blogpost_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: adam
--

ALTER SEQUENCE public.blogs_blogpost_id_seq OWNED BY public.blogs_blogpost.id;


--
-- Name: django_admin_log; Type: TABLE; Schema: public; Owner: adam
--

CREATE TABLE public.django_admin_log (
    id integer NOT NULL,
    action_time timestamp with time zone NOT NULL,
    object_id text,
    object_repr character varying(200) NOT NULL,
    action_flag smallint NOT NULL,
    change_message text NOT NULL,
    content_type_id integer,
    user_id integer NOT NULL,
    CONSTRAINT django_admin_log_action_flag_check CHECK ((action_flag >= 0))
);


ALTER TABLE public.django_admin_log OWNER TO adam;

--
-- Name: django_admin_log_id_seq; Type: SEQUENCE; Schema: public; Owner: adam
--

CREATE SEQUENCE public.django_admin_log_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.django_admin_log_id_seq OWNER TO adam;

--
-- Name: django_admin_log_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: adam
--

ALTER SEQUENCE public.django_admin_log_id_seq OWNED BY public.django_admin_log.id;


--
-- Name: django_content_type; Type: TABLE; Schema: public; Owner: adam
--

CREATE TABLE public.django_content_type (
    id integer NOT NULL,
    app_label character varying(100) NOT NULL,
    model character varying(100) NOT NULL
);


ALTER TABLE public.django_content_type OWNER TO adam;

--
-- Name: django_content_type_id_seq; Type: SEQUENCE; Schema: public; Owner: adam
--

CREATE SEQUENCE public.django_content_type_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.django_content_type_id_seq OWNER TO adam;

--
-- Name: django_content_type_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: adam
--

ALTER SEQUENCE public.django_content_type_id_seq OWNED BY public.django_content_type.id;


--
-- Name: django_migrations; Type: TABLE; Schema: public; Owner: adam
--

CREATE TABLE public.django_migrations (
    id integer NOT NULL,
    app character varying(255) NOT NULL,
    name character varying(255) NOT NULL,
    applied timestamp with time zone NOT NULL
);


ALTER TABLE public.django_migrations OWNER TO adam;

--
-- Name: django_migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: adam
--

CREATE SEQUENCE public.django_migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.django_migrations_id_seq OWNER TO adam;

--
-- Name: django_migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: adam
--

ALTER SEQUENCE public.django_migrations_id_seq OWNED BY public.django_migrations.id;


--
-- Name: django_session; Type: TABLE; Schema: public; Owner: adam
--

CREATE TABLE public.django_session (
    session_key character varying(40) NOT NULL,
    session_data text NOT NULL,
    expire_date timestamp with time zone NOT NULL
);


ALTER TABLE public.django_session OWNER TO adam;

--
-- Name: users_blogpostopened; Type: TABLE; Schema: public; Owner: adam
--

CREATE TABLE public.users_blogpostopened (
    id integer NOT NULL,
    opened boolean NOT NULL,
    blog_post_id integer NOT NULL,
    user_id integer NOT NULL,
    date timestamp with time zone NOT NULL
);


ALTER TABLE public.users_blogpostopened OWNER TO adam;

--
-- Name: users_blogpostopened_id_seq; Type: SEQUENCE; Schema: public; Owner: adam
--

CREATE SEQUENCE public.users_blogpostopened_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_blogpostopened_id_seq OWNER TO adam;

--
-- Name: users_blogpostopened_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: adam
--

ALTER SEQUENCE public.users_blogpostopened_id_seq OWNED BY public.users_blogpostopened.id;


--
-- Name: users_blogsubscriber; Type: TABLE; Schema: public; Owner: adam
--

CREATE TABLE public.users_blogsubscriber (
    id integer NOT NULL,
    date timestamp with time zone NOT NULL,
    email_notification boolean NOT NULL,
    blog_id integer NOT NULL,
    user_id integer NOT NULL
);


ALTER TABLE public.users_blogsubscriber OWNER TO adam;

--
-- Name: users_blogsubscriber_id_seq; Type: SEQUENCE; Schema: public; Owner: adam
--

CREATE SEQUENCE public.users_blogsubscriber_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_blogsubscriber_id_seq OWNER TO adam;

--
-- Name: users_blogsubscriber_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: adam
--

ALTER SEQUENCE public.users_blogsubscriber_id_seq OWNED BY public.users_blogsubscriber.id;


--
-- Name: users_userlog; Type: TABLE; Schema: public; Owner: adam
--

CREATE TABLE public.users_userlog (
    id integer NOT NULL,
    created timestamp with time zone NOT NULL,
    object_id text NOT NULL,
    action character varying(1) NOT NULL,
    user_id integer
);


ALTER TABLE public.users_userlog OWNER TO adam;

--
-- Name: users_userlog_id_seq; Type: SEQUENCE; Schema: public; Owner: adam
--

CREATE SEQUENCE public.users_userlog_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_userlog_id_seq OWNER TO adam;

--
-- Name: users_userlog_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: adam
--

ALTER SEQUENCE public.users_userlog_id_seq OWNED BY public.users_userlog.id;


--
-- Name: auth_group id; Type: DEFAULT; Schema: public; Owner: adam
--

ALTER TABLE ONLY public.auth_group ALTER COLUMN id SET DEFAULT nextval('public.auth_group_id_seq'::regclass);


--
-- Name: auth_group_permissions id; Type: DEFAULT; Schema: public; Owner: adam
--

ALTER TABLE ONLY public.auth_group_permissions ALTER COLUMN id SET DEFAULT nextval('public.auth_group_permissions_id_seq'::regclass);


--
-- Name: auth_permission id; Type: DEFAULT; Schema: public; Owner: adam
--

ALTER TABLE ONLY public.auth_permission ALTER COLUMN id SET DEFAULT nextval('public.auth_permission_id_seq'::regclass);


--
-- Name: auth_user id; Type: DEFAULT; Schema: public; Owner: adam
--

ALTER TABLE ONLY public.auth_user ALTER COLUMN id SET DEFAULT nextval('public.auth_user_id_seq'::regclass);


--
-- Name: auth_user_groups id; Type: DEFAULT; Schema: public; Owner: adam
--

ALTER TABLE ONLY public.auth_user_groups ALTER COLUMN id SET DEFAULT nextval('public.auth_user_groups_id_seq'::regclass);


--
-- Name: auth_user_user_permissions id; Type: DEFAULT; Schema: public; Owner: adam
--

ALTER TABLE ONLY public.auth_user_user_permissions ALTER COLUMN id SET DEFAULT nextval('public.auth_user_user_permissions_id_seq'::regclass);


--
-- Name: blogs_blog id; Type: DEFAULT; Schema: public; Owner: adam
--

ALTER TABLE ONLY public.blogs_blog ALTER COLUMN id SET DEFAULT nextval('public.blogs_blog_id_seq'::regclass);


--
-- Name: blogs_blogphoto id; Type: DEFAULT; Schema: public; Owner: adam
--

ALTER TABLE ONLY public.blogs_blogphoto ALTER COLUMN id SET DEFAULT nextval('public.blogs_blogphoto_id_seq'::regclass);


--
-- Name: blogs_blogpost id; Type: DEFAULT; Schema: public; Owner: adam
--

ALTER TABLE ONLY public.blogs_blogpost ALTER COLUMN id SET DEFAULT nextval('public.blogs_blogpost_id_seq'::regclass);


--
-- Name: django_admin_log id; Type: DEFAULT; Schema: public; Owner: adam
--

ALTER TABLE ONLY public.django_admin_log ALTER COLUMN id SET DEFAULT nextval('public.django_admin_log_id_seq'::regclass);


--
-- Name: django_content_type id; Type: DEFAULT; Schema: public; Owner: adam
--

ALTER TABLE ONLY public.django_content_type ALTER COLUMN id SET DEFAULT nextval('public.django_content_type_id_seq'::regclass);


--
-- Name: django_migrations id; Type: DEFAULT; Schema: public; Owner: adam
--

ALTER TABLE ONLY public.django_migrations ALTER COLUMN id SET DEFAULT nextval('public.django_migrations_id_seq'::regclass);


--
-- Name: users_blogpostopened id; Type: DEFAULT; Schema: public; Owner: adam
--

ALTER TABLE ONLY public.users_blogpostopened ALTER COLUMN id SET DEFAULT nextval('public.users_blogpostopened_id_seq'::regclass);


--
-- Name: users_blogsubscriber id; Type: DEFAULT; Schema: public; Owner: adam
--

ALTER TABLE ONLY public.users_blogsubscriber ALTER COLUMN id SET DEFAULT nextval('public.users_blogsubscriber_id_seq'::regclass);


--
-- Name: users_userlog id; Type: DEFAULT; Schema: public; Owner: adam
--

ALTER TABLE ONLY public.users_userlog ALTER COLUMN id SET DEFAULT nextval('public.users_userlog_id_seq'::regclass);


--
-- Data for Name: auth_group; Type: TABLE DATA; Schema: public; Owner: adam
--

COPY public.auth_group (id, name) FROM stdin;
\.


--
-- Data for Name: auth_group_permissions; Type: TABLE DATA; Schema: public; Owner: adam
--

COPY public.auth_group_permissions (id, group_id, permission_id) FROM stdin;
\.


--
-- Data for Name: auth_permission; Type: TABLE DATA; Schema: public; Owner: adam
--

COPY public.auth_permission (id, name, content_type_id, codename) FROM stdin;
1	Can add log entry	1	add_logentry
2	Can change log entry	1	change_logentry
3	Can delete log entry	1	delete_logentry
4	Can view log entry	1	view_logentry
5	Can add permission	2	add_permission
6	Can change permission	2	change_permission
7	Can delete permission	2	delete_permission
8	Can view permission	2	view_permission
9	Can add group	3	add_group
10	Can change group	3	change_group
11	Can delete group	3	delete_group
12	Can view group	3	view_group
13	Can add user	4	add_user
14	Can change user	4	change_user
15	Can delete user	4	delete_user
16	Can view user	4	view_user
17	Can add content type	5	add_contenttype
18	Can change content type	5	change_contenttype
19	Can delete content type	5	delete_contenttype
20	Can view content type	5	view_contenttype
21	Can add session	6	add_session
22	Can change session	6	change_session
23	Can delete session	6	delete_session
24	Can view session	6	view_session
25	Can add blog	7	add_blog
26	Can change blog	7	change_blog
27	Can delete blog	7	delete_blog
28	Can view blog	7	view_blog
29	Can add blog post	8	add_blogpost
30	Can change blog post	8	change_blogpost
31	Can delete blog post	8	delete_blogpost
32	Can view blog post	8	view_blogpost
33	Can add blog photo	9	add_blogphoto
34	Can change blog photo	9	change_blogphoto
35	Can delete blog photo	9	delete_blogphoto
36	Can view blog photo	9	view_blogphoto
37	Can add blog subscriber	10	add_blogsubscriber
38	Can change blog subscriber	10	change_blogsubscriber
39	Can delete blog subscriber	10	delete_blogsubscriber
40	Can view blog subscriber	10	view_blogsubscriber
41	Can add blog post opened	11	add_blogpostopened
42	Can change blog post opened	11	change_blogpostopened
43	Can delete blog post opened	11	delete_blogpostopened
44	Can view blog post opened	11	view_blogpostopened
45	Can add user log	12	add_userlog
46	Can change user log	12	change_userlog
47	Can delete user log	12	delete_userlog
48	Can view user log	12	view_userlog
\.


--
-- Data for Name: auth_user; Type: TABLE DATA; Schema: public; Owner: adam
--

COPY public.auth_user (id, password, last_login, is_superuser, username, first_name, last_name, email, is_staff, is_active, date_joined) FROM stdin;
2	Qwerty123	\N	f	adam	Adam	Misiak	adammisiak3@gmail.com	f	t	2020-10-24 13:21:40.399+00
3	qwerty	\N	f	qwerty	Adam	Misiak	test@test.com	f	t	2020-12-03 15:18:22.878092+00
5	Test_password	\N	f	test_username	Qwert	Qwerty	test@email.com	f	t	2020-12-03 15:22:17.014972+00
4	pbkdf2_sha256$216000$Io2YU38w8Vkt$nlzwkXM3UrnQqrBIfI+lKGth2CpRAtShjYHau7h9bPw=	2020-12-03 15:26:09.801989+00	f	123	Adam	Misiak	test@testt.com	f	t	2020-12-03 15:19:15.657435+00
6	pbkdf2_sha256$216000$yC9xz8W4JXBA$+d1riTYh+pxj8bexqRx84aMfDhTY6kkUr1uh4hdo4Hs=	2020-12-03 15:28:01.003862+00	f	qwe	qwe	qwe	qwe@qwe.com	f	t	2020-12-03 15:27:54.549677+00
7	pbkdf2_sha256$216000$yRMIWGUwPzpa$47nmBP52qMPrOi54stN/Ch9rerSJn8p0FjP60W7SyLo=	2020-12-09 16:02:24.392588+00	f	12	12	12	12@12.com	f	t	2020-12-09 16:02:18.81002+00
1	pbkdf2_sha256$216000$PkIzdmaLyzHm$MWNNAy/KDWBoD2gTVjyGETdy34YWL3/oNzFbL8TEk+8=	2021-01-13 08:01:09.152336+00	t	admin				t	t	2020-10-12 15:51:52.667+00
\.


--
-- Data for Name: auth_user_groups; Type: TABLE DATA; Schema: public; Owner: adam
--

COPY public.auth_user_groups (id, user_id, group_id) FROM stdin;
\.


--
-- Data for Name: auth_user_user_permissions; Type: TABLE DATA; Schema: public; Owner: adam
--

COPY public.auth_user_user_permissions (id, user_id, permission_id) FROM stdin;
\.


--
-- Data for Name: blogs_blog; Type: TABLE DATA; Schema: public; Owner: adam
--

COPY public.blogs_blog (id, name, url, author, genre, genre2, language) FROM stdin;
1	Trading for a living	https://www.tradingforaliving.pl/	Tomasz Trela	Financials		Polish
3	Inwestomat.eu	https://inwestomat.eu/	Mateusz Samołyk	Financials		Polish
4	Independent Trader	https://independenttrader.pl/	Trader21	Financials		Polish
5	USStocks	https://usstocks.pl/	Bartek Szyma	Financials		Polish
6	System Trader	https://systemtrader.pl/	Jacek Lempart	Financials		Polish
7	Spekulant	http://spekulant.com.pl/	Dawid Spekulant	Financials		Polish
9	Finanse Bardzo Osobiste	https://marciniwuc.com/	Marcin Iwuć	Financials		Polish
10	MMazurek.dev	https://mmazurek.dev/	Mateusz Mazurek	IT		Polish
8	Just Geek It	https://geek.justjoin.it/	Just Join It	IT		Polish
11	Jak Oszczędzać Pieniądze	https://jakoszczedzacpieniadze.pl/	Michał Szafrański	Financials		Polish
2	Pamiętnik Giełdowy	https://www.pamietnikgieldowy.pl/	Daniel Heliosz	Financials		Polish
12	Problemy Polskiej Branży IT	https://ppbit.pl/	Trolololodev	IT		Polish
13	Sunscrapers Python	https://sunscrapers.com/blog/category/python/	Sunscrapers Team	IT		English
14	Sunscrapers Web Development	https://sunscrapers.com/blog/category/web-development/	Sunscrapers Team	IT		English
15	Niebezpiecznik	https://niebezpiecznik.pl/	Piotr Konieczny	IT		Polish
16	Finax	https://www.finax.eu/pl/blog	Finax	Financials		Polish
17	Tawcan	https://www.tawcan.com/	Bob Lai	Financials		English
\.


--
-- Data for Name: blogs_blogphoto; Type: TABLE DATA; Schema: public; Owner: adam
--

COPY public.blogs_blogphoto (id, photo, blog_id) FROM stdin;
3	blogs_manager/static/img/13490753_1735152863396438_7024693842940843886_o_-_Kopia.jpg	2
4	blogs_manager/static/img/125374_1594746413.png	1
5	blogs_manager/static/img/pobrane.png	3
6	blogs_manager/static/img/unnamed.jpg	4
7	blogs_manager/static/img/logotyp_usstocks-kopia_biale-litery-i-byk.png	5
8	blogs_manager/static/img/ICON_2.jpg	6
9	blogs_manager/static/img/marcin-iwuc-logo-m.png	9
10	blogs_manager/static/img/cropped-Webp.net-resizeimage.webp	10
11	blogs_manager/static/img/cropped-justgeekfavicon1080-1.png	8
12	blogs_manager/static/img/jak-oszczedzac-pieniadze-logo-1.png	11
\.


--
-- Data for Name: blogs_blogpost; Type: TABLE DATA; Schema: public; Owner: adam
--

COPY public.blogs_blogpost (id, name, url, added, blog_id) FROM stdin;
1	Siedem kroków, zanim zaczniesz inwestować na giełdzie za granicą	https://www.tradingforaliving.pl/inwestowanie-na-gieldzie-za-granica/	2020-10-05 00:00:00+00	1
15	Telemedycyna – jak zainwestować w najnowszy trend 21. wieku?	https://www.tradingforaliving.pl/telemedycyna/	2020-10-26 00:00:00+00	1
16	Exante - broker dla profesjonalistów z dostępem (dla każdego) do amerykańskich ETF'ów oraz możliwie niedługo również do moich portfelów	http://www.pamietnikgieldowy.pl/2020/10/exante-broker-dla-profesjonalistow-z.html	2020-10-26 00:00:00+00	2
17	\nJak zaplanować swoją wolność finansową? Mój plan sprzed lat\n	https://inwestomat.eu/jak-zaplanowac-swoja-wolnosc-finansowa/	2020-10-26 00:00:00+00	3
20	Megatrend Trading (WF0BSWTRAD)	http://www.pamietnikgieldowy.pl/2019/06/moj-portfel-zagranicznych-spoek.html	2020-10-28 00:00:00+00	2
21	\nJak zaplanować swoją wolność finansową? Mój plan sprzed lat\n	https://inwestomat.eu/jak-zaplanowac-swoja-wolnosc-finansowa/	2020-10-26 00:00:00+00	4
22	Bycze spółki po październiku 2020	http://www.pamietnikgieldowy.pl/2020/10/bycze-spoki-po-pazdzierniku-2020.html	2020-10-31 00:00:00+00	2
23	\nREIT (1/5) – Czym są fundusze nieruchomości REIT i co je odróżnia od innych spółek?\n	https://inwestomat.eu/czym-sa-fundusze-nieruchomosci-reit/	2020-11-02 00:00:00+00	3
27	Co dalej ze światową gospodarką? - DEBATA - Trader21, Bartosiak, Kwiecień, Piech	https://independenttrader.pl/co-dalej-ze-swiatowa-gospodarka-debata-trader21-bartosiak-kwiecien-piech.html	2020-11-02 00:00:00+00	4
28	Fiverr International (FVRR)	http://www.pamietnikgieldowy.pl/2020/11/fiverr-international-fvrr.html	2020-11-03 00:00:00+00	2
29	Permanent Link to 🔊 ST 054: Inwestowanie długoterminowe według Marcina Iwucia z bloga Finanse Bardzo Osobiste	https://systemtrader.pl/st-054-jak-budowac-dlugoterminowy-portfel-inwestycyjny-rozmowa-z-marcinem-iwuciem/	2020-10-23 00:00:00+00	6
30	Wybory 2020: Trump vs. Biden - relacja live	https://independenttrader.pl/wybory-2020-trump-vs-biden-relacja-live.html	2020-11-03 00:00:00+00	4
32	Dlaczego nie kupuję spółek podczas debiutu giełdowego?	http://www.pamietnikgieldowy.pl/2020/11/dlaczego-nie-kupuje-spoek-podczas.html	2020-11-09 00:00:00+00	2
33	\nREIT (2/5) – Jak kupić fundusz nieruchomości REIT? Porównanie możliwości\n	https://inwestomat.eu/jak-kupic-fundusz-nieruchomosci-reit/	2020-11-09 00:00:00+00	3
34	Wielki Reset - najwyżej ocenione wystąpienie na XTB Masterclass 2020	https://independenttrader.pl/wielki-reset-najwyzej-ocenione-wystapienie-na-xtb-masterclass-2020.html	2020-11-07 00:00:00+00	4
35	Permanent Link to 🔊 ST 055: Kulisy tworzenia autorskich narzędzi dla inwestorów + plany na przyszłość	https://systemtrader.pl/st-055-kulisy-tworzenia-autorskich-narzedzi-dla-inwestorow-plany-na-przyszlosc/	2020-11-08 00:00:00+00	6
36	Permanent Link to 🔊 ST 055: Kulisy tworzenia autorskich narzędzi dla inwestorów + plany na przyszłość	https://systemtrader.pl/st-055-kulisy-tworzenia-autorskich-narzedzi-dla-inwestorow-plany-na-przyszlosc/	2020-11-09 00:00:00+00	6
38	Czy szczepionka na Covid-19 uratuje inwestorów?	https://independenttrader.pl/czy-szczepionka-na-covid-19-uratuje-inwestorow.html	2020-11-12 00:00:00+00	4
39	Czy kapitał właśnie migruje ze spółek typu "growth" do "value"?	http://www.pamietnikgieldowy.pl/2020/11/czy-kapita-wasnie-migruje-ze-spoek-typu.html	2020-11-01 00:00:00+00	2
40	Czy kapitał właśnie migruje ze spółek typu "growth" do "value"?	http://www.pamietnikgieldowy.pl/2020/11/czy-kapita-wasnie-migruje-ze-spoek-typu.html	2020-11-11 00:00:00+00	2
41	Permanent Link to 📖 18 nowych portfeli, rozbudowana strategia dla rynku akcji, nowe funkcje, kompletny katalog ponad 2500 ETF – trzecia odsłona oprogramowania #ST	https://systemtrader.pl/18-nowych-portfeli-rozbudowana-strategia-dla-rynku-akcji-nowe-funkcje-kompletny-katalog-ponad-2500-etf-trzecia-odslona-oprogramowania-st/	2020-11-13 00:00:00+00	6
42	Python drugim najpopularniejszym językiem. Jego twórca dołącza do Microsoftu	https://geek.justjoin.it/tworca-pythona-dolacza-do-microsoftu	2020-11-13 00:00:00+00	8
43	Mit dywidendy. Dlaczego inwestowanie w spółki dywidendowe to wishful thinking?	https://www.tradingforaliving.pl/inwestowanie-w-spolki-dywidendowe/	2020-11-16 00:00:00+00	1
45	Kotlin – testowanie: frameworki, mockowanie, asercje. Przegląd możliwości w 2020 roku	https://geek.justjoin.it/kotlin-testowanie-frameworki-mockowanie-asercje-przeglad-mozliwosci-w-2020-roku	2020-11-16 00:00:00+00	8
47	Które ETF-y do portfela długoterminowego? [FFP05]	https://marciniwuc.com/ktore-etfy/	2020-11-12 00:00:00+00	9
48	Kinsale Capital Group (KNSL)	http://www.pamietnikgieldowy.pl/2020/11/kinsale-capital-lgroup-knsl.html	2020-11-17 00:00:00+00	2
50	Najbardziej absurdalne benefity pracownicze w IT	https://geek.justjoin.it/najabsurdalniejsze-benefity-pracownicze	2020-11-18 00:00:00+00	8
51	Nie chce Ci się działać? To poznaj tę historię!	https://marciniwuc.com/niechec-do-dzialania/	2020-11-16 00:00:00+00	9
53	Firmy w IT mierzą się z ogromną ilością niespójnych danych. Jak powstał dział Data w Tidio?	https://geek.justjoin.it/firmy-w-it-mierza-sie-z-ogromna-iloscia-niespojnych-danych-jak-powstal-dzial-data-w-tidio	2020-11-19 00:00:00+00	8
44	\nREIT (3/5) – Jak wybrać najlepszy REIT dostępny na rynku? Analiza REIT-ów\n	https://inwestomat.eu/jak-wybrac-najlepszy-reit/	2020-11-16 00:00:00+00	3
31	VXV:VIX z sygnałem zakupowym	http://spekulant.com.pl/2020/11/01/vxvvix-z-sygnalem-zakupowym-11/	2020-11-01 00:00:00+00	7
56	Przeglądarka w terminalu? Śniadanie z Programowaniem #61	https://geek.justjoin.it/przegladarka-w-terminalu-sniadanie-z-programowaniem-61	2020-11-20 00:00:00+00	8
52	Redis i Python – dobrze dobrana para #7	https://mmazurek.dev/redis-i-python-dobrze-dobrana-para-7/	2020-11-08 00:00:00+00	10
26	 Dywidendowa droga cz 3 – profil inwestora dywidendowego.	https://usstocks.pl/dywidendowa-droga-cz-3-profil-inwestora-dywidendowego/	2020-10-29 00:00:00+00	5
54	S&P Global (SPGI)	http://www.pamietnikgieldowy.pl/2020/11/s-global-spgi.html	2020-11-19 00:00:00+00	2
61	Jak i gdzie znaleźć mentora programowania?	https://geek.justjoin.it/jak-znalezc-mentora-programowania	2020-11-23 00:00:00+00	8
72	Infrastructure as Code. Czym jest biblioteka AWS CDK – wady i zalety	https://geek.justjoin.it/infrastructure-as-code-czym-jest-biblioteka-aws-cdk-wady-i-zalety	2020-11-30 00:00:00+00	8
60	Jak rząd zniszczy gospodarkę? - Wywiad z Traderem21 dla NamZalezy.pl	https://independenttrader.pl/jak-rzad-zniszczy-gospodarke-wywiad-z-traderem21-dla-namzalezy-pl.html	2020-11-23 00:00:00+00	4
62	Redis i Python – dobrze dobrana para #8	https://mmazurek.dev/redis-i-python-dobrze-dobrana-para-8/	2020-11-23 00:00:00+00	10
76	Salesforce kupiło Slacka za 27,7 mld USD	https://geek.justjoin.it/salesforce-kupilo-slacka	2020-12-02 00:00:00+00	8
77	Finanse osobiste według Kena i Barbie	https://marciniwuc.com/ken-i-barbie/	2020-11-19 00:00:00+00	9
93	CoStar Group (CSGP)	http://www.pamietnikgieldowy.pl/2020/12/costar-group-csgp.html	2020-12-06 00:00:00+00	2
49	Najważniejsze wydarzenia minionych tygodni - Listopad 2020	https://independenttrader.pl/najwazniejsze-wydarzenia-minionych-tygodni-listopad-2020.html	2020-11-18 00:00:00+00	4
59	\nREIT (4/5) – Lepiej kupić REIT bezpośrednio czy poprzez ETF?\n	https://inwestomat.eu/lepiej-kupic-reit-bezposrednio-czy-poprzez-etf/	2020-11-23 00:00:00+00	3
58	DexCom (DXCM)	http://www.pamietnikgieldowy.pl/2020/11/dexcom-dxcm.html	2020-11-21 00:00:00+00	2
69	Ponownie ruszył nabór do „Klanu Finansowych Ninja” – społeczności 1400+ świetnych osób	https://jakoszczedzacpieniadze.pl/klan-finansowych-ninja-listopad-2020	2020-11-25 00:00:00+00	11
68	Linux na MacBookach? Śniadanie z Programowaniem #62	https://geek.justjoin.it/linux-na-macbookach-sniadanie-z-programowaniem-62	2020-11-27 00:00:00+00	8
73	Bycze spółki po listopadzie 2020	http://www.pamietnikgieldowy.pl/2020/12/bycze-spoki-po-listopadzie-2020.html	2020-12-01 00:00:00+00	2
66	Korea Południowa nakłada na Facebooka 6 milionów dolarów grzywny za udostępnianie informacji	https://geek.justjoin.it/korea-poludniowa-facebook-6-milionow-dolarow-grzywny	2020-11-26 00:00:00+00	8
74	Q&A z Traderem21 - dogrywka z WallStreet	https://independenttrader.pl/q-a-z-traderem21-dogrywka-z-wallstreet.html	2020-11-30 00:00:00+00	4
75	Przejechałam ponad 15 tys. km testując w samochodach. Historia Mai Łysiak	https://geek.justjoin.it/przejechalam-ponad-15-tys-km-testujac-w-samochodach-historia-mai-lysiak	2020-12-01 00:00:00+00	8
63	Five9 (FIVN)	http://www.pamietnikgieldowy.pl/2020/11/five9-fivn.html	2020-11-24 00:00:00+00	2
67	Simulations Plus (SLP)	http://www.pamietnikgieldowy.pl/2020/11/simulations-plus-slp.html	2020-11-26 00:00:00+00	2
79	24 dni wyzwania JavaScriptmas, czyli nauka JavaScript do Wigilii	https://geek.justjoin.it/nauka-javascript-do-wigilii	2020-12-03 00:00:00+00	8
64	Najważniejsze wykresy minionych tygodni - Listopad 2020	https://independenttrader.pl/najwazniejsze-wykresy-minionych-tygodni-listopad-2020.html	2020-11-26 00:00:00+00	4
78	Podsumowanie: listopad 2020	https://mmazurek.dev/podsumowanie-listopad-2020/	2020-12-01 00:00:00+00	10
95	Strategia, budowa i rozwój produktu IT okiem Product Managera	https://geek.justjoin.it/strategia-budowa-i-rozwoj-produktu-it-okiem-product-managera	2020-12-07 00:00:00+00	8
80	Ranking kredytów hipotecznych grudzień 2020	https://marciniwuc.com/ranking-kredytow-hipotecznych/	2020-12-02 00:00:00+00	9
46	Mit dywidendy. Dlaczego inwestowanie w spółki dywidendowe jest już passé?	https://www.tradingforaliving.pl/inwestowanie-w-spolki-dywidendowe/	2020-11-16 00:00:00+00	1
86	Verisk Analytics (VRSK)	http://www.pamietnikgieldowy.pl/2020/12/verisk-analytics-vrsk.html	2020-12-04 00:00:00+00	2
92	Masz leasing? Dopilnuj obniżki rat – zwłaszcza w Alior Leasing!	https://jakoszczedzacpieniadze.pl/alior-leasing-obnizka-rat-wibor	2020-12-04 00:00:00+00	11
70	\nREIT (5/5) – Czy REIT może konkurować z mieszkaniem na wynajem?\n	https://inwestomat.eu/czy-reit-moze-konkurowac-z-mieszkaniem-na-wynajem/	2020-11-30 00:00:00+00	3
91	Wszystko o IKZE + KALKULATOR opłacalności	https://marciniwuc.com/wszystko-ikze-kalkulator/	2020-12-03 00:00:00+00	9
102	Platforma video z AWS Elastic Transcoder i Amazon S3 – tutorial	https://geek.justjoin.it/platforma-video-z-aws-elastic-transcoder-i-amazon-s3-tutorial	2020-12-09 00:00:00+00	8
99	Prezenty dla programisty. Geek gadżety i najlepsze pomysły na prezent	https://geek.justjoin.it/najlepsze-prezenty-dla-programisty-informatyka-geeka	2020-12-08 00:00:00+00	8
100	Zamiast COVIDa Dostał IPBOXa. Poznaj sekret jak to zrobił.	https://ppbit.pl/felieton/zamiast-covida-dostal-ipboxa-poznaj-sekret-jak-to-zrobil/	2020-11-26 00:00:00+00	12
71	DAX – licho nie śpi	http://spekulant.com.pl/2020/11/29/dax-licho-nie-spi/	2020-11-29 00:00:00+00	7
97	Continuous Learning w karierze programisty. Historia Damiana Skonecznego	https://geek.justjoin.it/continuous-learning-w-karierze-programisty-historia-damiana-skonecznego	2020-12-08 00:00:00+00	8
96	Kiedyś programowałem w Javie – czyli o zmianie języka wiodącego	https://mmazurek.dev/kiedys-programowalem-w-javie-czyli-o-zmianie-jezyka-wiodacego/	2020-12-07 00:00:00+00	10
104	Dni darmowej dostawy i posłuchaj fragmentu „Finansowej Fortecy”.	https://marciniwuc.com/dni-darmowej-dostawy/	2020-12-08 00:00:00+00	9
90	Co sprawiło, że giełdę traktuje się jak kasyno?	https://independenttrader.pl/co-sprawilo-ze-gielde-traktuje-sie-jak-kasyno.html	2020-12-04 00:00:00+00	4
103	Jak efektywnie pracować na home office? Devdebata	https://geek.justjoin.it/efektywna-praca-zdalna-devdebata	2020-12-09 00:00:00+00	8
157	A jednak! Tinder na VSCode!	https://geek.justjoin.it/tinder-dla-programistow	2020-12-11 00:00:00+00	8
159	Tylko DZIŚ do północy trwa Dzień Darmowej Dostawy = wszystkie książki 15–17 zł taniej!	https://jakoszczedzacpieniadze.pl/ddd-dzien-darmowej-dostawy-2020	2020-12-10 00:00:00+00	11
161	Przewodnik prezentowy – mądre książki o finansach i biznesie	https://jakoszczedzacpieniadze.pl/ddd-dzien-darmowej-dostawy-2020	2020-12-10 00:00:00+00	11
189	Malware na Androidzie? Kto by się przejmował?	https://geek.justjoin.it/malware-na-androidzie-kto-by-sie-przejmowal	2020-12-21 00:00:00+00	8
191	Metale fizyczne vs. papierowe. Na czym polega różnica?	https://independenttrader.pl/metale-fizyczne-vs-papierowe-na-czym-polega-roznica.html	2020-12-23 00:00:00+00	4
180	Nie żyje twórca DirectX. Buntownik odmienił branżę gier komputerowych	https://geek.justjoin.it/nie-zyje-eric-engstrom	2020-12-16 00:00:00+00	8
98	Zapraszam na wykłady o opcjach i zarządzaniu portfelem akcyjnym	https://www.tradingforaliving.pl/zapraszam-na-wyklady/	2020-12-07 00:00:00+00	1
181	Renaissance IPO ETF (IPO)	http://www.pamietnikgieldowy.pl/2020/12/renaissance-ipo-etf-ipo.html	2020-12-19 00:00:00+00	2
177	Test Gallupa po ponad dwóch latach	https://mmazurek.dev/test-gallupa-po-ponad-dwoch-latach/	2020-12-15 00:00:00+00	10
163	When to use a UI component library in a React project?	https://sunscrapers.com/blog/when-to-use-a-ui-component-library-in-a-react-project/	2020-02-13 00:00:00+00	14
169	6 best Django tutorials and books for advanced Python developers	https://sunscrapers.com/blog/6-best-django-tutorials-and-books-for-advanced-python-developers/	2020-02-14 00:00:00+00	13
170	When to use a UI component library in a React project?	https://sunscrapers.com/blog/when-to-use-a-ui-component-library-in-a-react-project/	2020-02-14 00:00:00+00	14
172	6 best Django tutorials and books for advanced Python developers	https://sunscrapers.com/blog/6-best-django-tutorials-and-books-for-advanced-python-developers/	2020-02-15 00:00:00+00	13
173	When to use a UI component library in a React project?	https://sunscrapers.com/blog/when-to-use-a-ui-component-library-in-a-react-project/	2020-02-15 00:00:00+00	14
164	Amgen (AMGN)	http://www.pamietnikgieldowy.pl/2020/12/amgen-amgn.html	2020-12-13 00:00:00+00	2
176	Podsumowanie 2020. Zdecyduj, co powstanie w roku 2021!	https://marciniwuc.com/podsumowanie-2020/	2020-12-15 00:00:00+00	9
168	LIVE: Inwestowanie przez ETF-y z robo-doradcą Finax i szczegóły promocji #KFN	https://jakoszczedzacpieniadze.pl/live-inwestowanie-etf-z-robo-doradca-finax-i-kfn	2020-12-14 00:00:00+00	11
101	Equinix (EQIX)	http://www.pamietnikgieldowy.pl/2020/12/equinix-eqix.html	2020-12-09 00:00:00+00	2
94	\nTanie inwestowanie. Najtańsze konta maklerskie, akcje i ETF-y\n	https://inwestomat.eu/tanie-inwestowanie/	2020-12-07 00:00:00+00	3
185	Redis i Python – dobrze dobrana para #10	https://mmazurek.dev/redis-i-python-dobrze-dobrana-para-10/	2020-12-21 00:00:00+00	10
166	Czy polski rynek IT jest otwarty na osoby niepełnosprawne?	https://geek.justjoin.it/czy-polski-rynek-it-jest-otwarty-na-osoby-niepelnosprawne	2020-12-14 00:00:00+00	8
158	Ranking IKZE 2020. Które IKZE najlepsze dla Ciebie?	https://marciniwuc.com/ranking-ikze-2020/	2020-12-10 00:00:00+00	9
183	Kurs Inteligentny Inwestor 2021 już w przedsprzedaży!	https://independenttrader.pl/kurs-inteligentny-inwestor-2021-juz-w-przedsprzedazy.html	2020-12-17 00:00:00+00	4
155	Prezes pobił informatyka.  Krew się leje. Alienware jako serwer.	https://ppbit.pl/news/prezes-pobil-informatyka-krew-sie-leje-alienware-jako-serwer/	2020-12-09 00:00:00+00	12
171	CdProjekt (CDR)	http://www.pamietnikgieldowy.pl/2011/06/optimus-coraz-mniej-miejsca-dla-spoki.html	2020-12-14 00:00:00+00	2
167	Redis i Python – dobrze dobrana para #9	https://mmazurek.dev/redis-i-python-dobrze-dobrana-para-9/	2020-12-14 00:00:00+00	10
178	6 best Django tutorials and books for advanced Python developers	https://sunscrapers.com/blog/6-best-django-tutorials-and-books-for-advanced-python-developers/	2020-02-16 00:00:00+00	13
179	When to use a UI component library in a React project?	https://sunscrapers.com/blog/when-to-use-a-ui-component-library-in-a-react-project/	2020-02-16 00:00:00+00	14
165	\nDlaczego akcje pasują do IKE bardziej niż obligacje?\n	https://inwestomat.eu/dlaczego-akcje-pasuja-do-ike-bardziej-niz-obligacje/	2020-12-14 00:00:00+00	3
184	W IT liczy się zaangażowanie, kreatywność i chęć rozwoju. Historia Marka Mach	https://geek.justjoin.it/w-it-liczy-sie-zaangazowanie-kreatywnosc-i-chec-rozwoju-historia-marka-mach	2020-12-21 00:00:00+00	8
186	Budżet domowy 2021 – gotowy szablon dla MS Excel, Numbers i arkusz Google Docs	https://jakoszczedzacpieniadze.pl/budzet-domowy-2021-szablon-arkusz-excel	2020-12-17 00:00:00+00	11
160	Najważniejsze wydarzenia minionych tygodni - Grudzień 2020	https://independenttrader.pl/najwazniejsze-wydarzenia-minionych-tygodni-grudzien-2020.html	2020-12-11 00:00:00+00	4
175	Kursantów często dopada brak wiary w swoje umiejętności. Historia Pawła Apanasewicza	https://geek.justjoin.it/kursantow-czesto-dopada-brak-wiary-w-swoje-umiejetnosci-historia-pawla-apanasewicza	2020-12-16 00:00:00+00	8
55	Permanent Link to 🔊 ST 056: Wes Gray – W inwestowaniu nie staraj się za bardzo, bądź za to cierpliwy, przyjmij długi horyzont inwestycyjny i zaufaj procesowi decyzyjnemu	https://systemtrader.pl/wes-gray-w-inwestowaniu-nie-staraj-sie-za-bardzo-badz-za-to-cierpliwy-przyjmij-dlugi-horyzont-inwestycyjny-i-zaufaj-procesowi-decyzyjnemu/	2020-11-20 00:00:00+00	6
174	Tydzień trzech wiedźm	http://spekulant.com.pl/2020/12/15/tydzien-trzech-wiedzm-2/	2020-12-15 00:00:00+00	7
187	6 best Django tutorials and books for advanced Python developers	https://sunscrapers.com/blog/6-best-django-tutorials-and-books-for-advanced-python-developers/	2020-02-21 00:00:00+00	13
188	When to use a UI component library in a React project?	https://sunscrapers.com/blog/when-to-use-a-ui-component-library-in-a-react-project/	2020-02-21 00:00:00+00	14
182	\nW co inwestować w 2021 roku? Mój portfel na I półrocze 2021\n	https://inwestomat.eu/w-co-inwestowac-w-2021-roku/	2020-12-21 00:00:00+00	3
190	Cerence (CRNC)	http://www.pamietnikgieldowy.pl/2020/12/cerence-crnc.html	2020-12-26 00:00:00+00	2
197	When to use a UI component library in a React project?	https://sunscrapers.com/blog/when-to-use-a-ui-component-library-in-a-react-project/	2020-02-27 00:00:00+00	14
196	6 best Django tutorials and books for advanced Python developers	https://sunscrapers.com/blog/6-best-django-tutorials-and-books-for-advanced-python-developers/	2020-02-27 00:00:00+00	13
213	Portfel Inwestycyjny "Najlepszych Spółek Świata" po czwartym roku	http://www.pamietnikgieldowy.pl/2021/01/portfel-inwestycyjny-najlepszych-spoek.html	2021-01-03 00:00:00+00	2
201	Jak zostać programistą, moje początki i plan przebranżowienia na IT	https://geek.justjoin.it/jak-zostac-programista-moje-poczatki-i-plan-przebranzowienia-na-it	2020-12-28 00:00:00+00	8
214	\nCzy program Rodzina 500+ spełnia swoją rolę? Ocena po 5 latach\n	https://inwestomat.eu/czy-program-rodzina-500-spelnia-swoja-role/	2021-01-04 00:00:00+00	3
210	Czarne Lustro, czyli podsumowanie 2020 roku cz. 2	https://independenttrader.pl/czarne-lustro-czyli-podsumowanie-2020-roku-cz-2.html	2021-01-01 00:00:00+00	4
205	Czarne Lustro, czyli podsumowanie 2020 roku cz.1	https://independenttrader.pl/czarne-lustro-czyli-podsumowanie-2020-roku-cz-1.html	2020-12-30 00:00:00+00	4
206	Czarne Lustro, czyli podsumowanie 2020 roku cz.1	https://independenttrader.pl/czarne-lustro-czyli-podsumowanie-2020-roku-cz-1.html	2020-12-30 00:00:00+00	4
192	Permanent Link to 📖 Ruszyła przedsprzedaż oprogramowania System Trader (#ST) – przygotuj swój plan działania na rynku	https://systemtrader.pl/ruszyla-przedsprzedaz-oprogramowania-st/	2020-12-27 00:00:00+00	6
203	Trochę literatury nt. zmienności	http://spekulant.com.pl/2020/12/29/troche-literatury-nt-zmiennosci/	2020-12-29 00:00:00+00	7
212	Podsumowanie: grudzień 2020	https://mmazurek.dev/podsumowanie-grudzien-2020/	2021-01-01 00:00:00+00	10
198	6 best Django tutorials and books for advanced Python developers	https://sunscrapers.com/blog/6-best-django-tutorials-and-books-for-advanced-python-developers/	2020-02-28 00:00:00+00	13
199	When to use a UI component library in a React project?	https://sunscrapers.com/blog/when-to-use-a-ui-component-library-in-a-react-project/	2020-02-28 00:00:00+00	14
211	Czego boją się Amerykanie – edycja A.D. 2021	http://spekulant.com.pl/2021/01/01/czego-boja-sie-amerykanie-edycja-a-d-2021/	2021-01-01 00:00:00+00	7
207	Co wydarzyło się w 2020 roku? Zestawienie newsów technologicznych	https://geek.justjoin.it/wiadomosci-technologiczne-2020	2020-12-30 00:00:00+00	8
193	Wesołych Świąt	http://spekulant.com.pl/2020/12/24/wesolych-swiat-7/	2020-12-24 00:00:00+00	7
204	Jak wirus wpływa na finanse studentów	https://www.finax.eu/pl/blog/jak-wirus-wplywa-na-finanse-studentow	2020-12-21 00:00:00+00	16
194	GitHub rezygnuje z banerów o plikach cookies	https://geek.justjoin.it/github-rezygnuje-z-banerow-o-plikach-cookies	2020-12-23 00:00:00+00	8
215	Ranking kredytów hipotecznych styczeń 2021	https://marciniwuc.com/ranking-kredytow-hipotecznych/	2021-01-04 00:00:00+00	9
209	Bycze spółki po dziewiątym roku walki z rynkiem	http://www.pamietnikgieldowy.pl/2020/12/bycze-spoki-po-dziewiatym-roku-walki-z.html	2020-12-31 00:00:00+00	2
195	Królewskie IT.	https://ppbit.pl/pudelek/krolewskie-it/	2020-12-24 00:00:00+00	12
218	Google w końcu tego doczekało. Ponad 400 pracowników utworzyło związek zawodowy	https://geek.justjoin.it/alphabet-workers-union-google	2021-01-05 00:00:00+00	8
219	American Tower Corporatioin (AMT)	http://www.pamietnikgieldowy.pl/2021/01/american-tower-corporatioin-amt.html	2021-01-12 00:00:00+00	2
224	Twórca WWW walczy o bezpieczeństwo danych w sieci	https://geek.justjoin.it/inrupt-solid	2021-01-12 00:00:00+00	8
230	Inteligenty Inwestor ma 35 lat, mocne nerwy i systematycznie buduje majątek	https://www.finax.eu/pl/blog/inteligenty-inwestor-ma-35-lat-mocne-nerwy-i-systematycznie-buduje-majatek	2021-01-13 00:00:00+00	16
228	Reviewing our 2020 dividend stock transactions – $115k added.	https://www.tawcan.com/dividend-stock-transactions-2020/	2021-01-11 00:00:00+00	17
156	Świąteczna przerwa na blogu potrwa do połowy stycznia 2021 roku (a co!)	https://www.tradingforaliving.pl/przerwa/	2020-12-10 00:00:00+00	1
229	Match Group (MTCH)	http://www.pamietnikgieldowy.pl/2021/01/match-group-mtch.html	2021-01-13 00:00:00+00	2
220	\nJak rozliczyć podatek z giełdy? Wszystko o PIT-38 i PIT-8C\n	https://inwestomat.eu/jak-rozliczyc-podatek-z-gieldy/	2021-01-11 00:00:00+00	3
232	Po wyborach w USA - Trader21 dla wRealu24 + ostrzeżenie	https://independenttrader.pl/po-wyborach-w-usa-trader21-dla-wrealu24-ostrzezenie.html	2021-01-15 00:00:00+00	4
227	Oszczędności dziecka – co warto o nich wiedzieć od strony prawnej?	https://www.finax.eu/pl/blog/oszczednosci-dziecka-co-warto-o-nich-wiedziec-od-strony-prawnej	2021-01-12 00:00:00+00	16
65	 Dywidendowa Droga cz 4 – podstawowe kryteria doboru spółki	https://usstocks.pl/dywidendowa-droga-cz-4-podstawowe-kryteria-doboru-spolki/	2020-11-24 00:00:00+00	5
222	Permanent Link to 🔊 ST 058: Szaleństwo prognozowania rynków finansowych	https://systemtrader.pl/st-058-szalenstwo-prognozowania-rynkow-finansowych/	2021-01-10 00:00:00+00	6
223	Kampania marcowa – DAX Futures 9 600 pkt	http://spekulant.com.pl/2021/01/11/kampania-marcowa-dax-futures-9-600-pkt/	2021-01-11 00:00:00+00	7
233	Wikipedia kończy 20 lat!	https://geek.justjoin.it/urodziny-wikipedii	2021-01-15 00:00:00+00	8
234	Zwiększ swoje zarobki, pomagając mi w tworzeniu wartościowych treści i realizacji misji​	https://marciniwuc.com/rekrutacja-2021/	2021-01-15 00:00:00+00	9
162	6 best Django tutorials and books for advanced Python developers	https://sunscrapers.com/blog/6-best-django-tutorials-and-books-for-advanced-python-developers/	2020-02-13 00:00:00+00	13
221	Czarne Lustro, czyli podsumowanie 2020 roku cz.3	https://independenttrader.pl/czarne-lustro-czyli-podsumowanie-2020-roku-cz-3.html	2021-01-12 00:00:00+00	4
231	Dziesięć najpopularniejszych repozytoriów na Githubie	https://geek.justjoin.it/najpopularniejsze-repozytoria-github	2021-01-14 00:00:00+00	8
225	Jak skutecznie działać w nowym roku – wywiad z Jackiem Kłosińskim	https://marciniwuc.com/jak-skutecznie-dzialac/	2021-01-05 00:00:00+00	9
216	Podsumowanie roku 2020	https://mmazurek.dev/podsumowanie-roku-2020/	2021-01-04 00:00:00+00	10
217	Jesteśmy w tym razem, czyli kilka przemyśleń po 2020 roku	https://jakoszczedzacpieniadze.pl/jestesmy-w-tym-razem-czyli-kilka-przemyslen-po-2020-roku	2021-01-05 00:00:00+00	11
226	6 rzeczy, które powiedziałem na wigilii ale nie mogę ich powiedzieć na daily.	https://ppbit.pl/null/6-rzeczy-ktore-powiedzialem-na-wigilii-ale-nie-moge-ich-powiedziec-na-daily/	2021-01-08 00:00:00+00	12
200	Nie wykorzystałeś budżetu szkoleniowego? Kup voucher na szkolenia Niebezpiecznika na 2021	https://niebezpiecznik.pl/post/nie-wykorzystales-budzetu-szkoleniowego-kup-voucher-na-szkolenia-niebezpiecznika-na-2021/	2020-12-11 00:00:00+00	15
\.


--
-- Data for Name: django_admin_log; Type: TABLE DATA; Schema: public; Owner: adam
--

COPY public.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) FROM stdin;
1	2020-10-14 15:36:51.865+00	1	Trading for a living	1	[{"added": {}}]	7	1
2	2020-10-17 10:05:46.95+00	2	Pamiętnik Giełdowy	1	[{"added": {}}]	7	1
3	2020-10-17 10:06:35.764+00	2	Pamiętnik Giełdowy	2	[{"changed": {"fields": ["Url"]}}]	7	1
4	2020-10-20 16:09:32.963+00	3	Inwestomat.eu	1	[{"added": {}}]	7	1
5	2020-10-27 15:03:14.563+00	14	Siedem kroków, zanim zaczniesz inwestować na giełdzie za granicą	3		8	1
6	2020-10-27 15:03:14.631+00	13	Siedem kroków, zanim zaczniesz inwestować na giełdzie za granicą	3		8	1
7	2020-10-27 15:03:14.733+00	12	Siedem kroków, zanim zaczniesz inwestować na giełdzie za granicą	3		8	1
8	2020-10-27 15:03:14.835+00	11	Siedem kroków, zanim zaczniesz inwestować na giełdzie za granicą	3		8	1
9	2020-10-27 15:03:14.938+00	10	Siedem kroków, zanim zaczniesz inwestować na giełdzie za granicą	3		8	1
10	2020-10-27 15:03:15.039+00	9	Siedem kroków, zanim zaczniesz inwestować na giełdzie za granicą	3		8	1
11	2020-10-27 15:03:15.141+00	8	Siedem kroków, zanim zaczniesz inwestować na giełdzie za granicą	3		8	1
12	2020-10-27 15:03:15.243+00	7	Siedem kroków, zanim zaczniesz inwestować na giełdzie za granicą	3		8	1
13	2020-10-27 15:03:15.311+00	6	Siedem kroków, zanim zaczniesz inwestować na giełdzie za granicą	3		8	1
14	2020-10-27 15:03:15.379+00	5	Siedem kroków, zanim zaczniesz inwestować na giełdzie za granicą	3		8	1
15	2020-10-27 15:03:15.481+00	4	Siedem kroków, zanim zaczniesz inwestować na giełdzie za granicą	3		8	1
16	2020-10-27 15:03:15.549+00	3	Siedem kroków, zanim zaczniesz inwestować na giełdzie za granicą	3		8	1
17	2020-10-27 15:03:15.651+00	2	Siedem kroków, zanim zaczniesz inwestować na giełdzie za granicą	3		8	1
18	2020-10-27 15:36:46.576+00	16	Exante - broker dla profesjonalistów z dostępem (dla każdego) do amerykańskich ETF'ów oraz możliwie niedługo również do moich portfelów	2	[{"changed": {"fields": ["Name"]}}]	8	1
19	2020-10-28 16:55:55.645+00	19	Dzisiaj podsumowanie moich wyników w zarządzaniu portfelem, których udziały można kupić na giełdzie - Megatrend Trading. Dodam przy tym, że wpis ten\nnie należy spostrzegać jako reklamę lub zachętę do 	3		8	1
20	2020-10-28 16:55:55.72+00	18	Kolejny zagraniczny broker\nstara się zaistnieć na polskim rynku. Dla nas – inwestorów jest to bardzo dobry\nznak, za sprawą którego pozostali brokerzy, działający na polskim rynku (w\nszczególności pols	3		8	1
21	2020-10-29 15:48:53.059+00	4	Independent Trader	1	[{"added": {}}]	7	1
22	2020-11-02 16:01:14.634+00	24	\nREIT (1/5) – Czym są fundusze nieruchomości REIT i co je odróżnia od innych spółek?\n	3		8	1
23	2020-11-02 16:13:12.001+00	5	USStocks	1	[{"added": {}}]	7	1
24	2020-11-02 16:24:31.139+00	25	\nREIT (1/5) – Czym są fundusze nieruchomości REIT i co je odróżnia od innych spółek?\n	3		8	1
25	2020-11-03 15:59:46.191+00	6	System Trader	1	[{"added": {}}]	7	1
26	2020-11-06 16:23:54.23+00	7	Spekulant	1	[{"added": {}}]	7	1
27	2020-11-07 09:52:55.537+00	1	Pamiętnik Giełdowy subscribed by admin in 2020-11-07 09:52:46+00:00	1	[{"added": {}}]	9	1
28	2020-11-09 14:50:02.46+00	1	Trading for a living	2	[{"changed": {"fields": ["Icon"]}}]	7	1
29	2020-11-12 16:10:45.14+00	37	Czy kapitał właśnie migruje ze spółek typu "growth" do "value"?	3		8	1
30	2020-11-14 10:29:31.828+00	8	Just Geek It	1	[{"added": {}}]	7	1
31	2020-11-16 14:47:54.196+00	9	Finanse Bardzo Osobiste	1	[{"added": {}}]	7	1
32	2020-11-18 14:38:09.494+00	10	MMazurek.dev	1	[{"added": {}}]	7	1
33	2020-11-28 14:58:11.603771+00	11	Jak Oszczędzać Pieniądze	1	[{"added": {}}]	7	1
34	2020-11-30 16:15:30.679577+00	1	BlogPhoto object (1)	1	[{"added": {}}]	10	1
35	2020-11-30 16:17:38.125947+00	2	BlogPhoto object (2)	1	[{"added": {}}]	10	1
36	2020-12-01 15:21:14.433937+00	3	BlogPhoto object (3)	1	[{"added": {}}]	10	1
37	2020-12-01 15:21:22.789826+00	2	BlogPhoto object (2)	3		10	1
38	2020-12-01 15:21:23.009442+00	1	BlogPhoto object (1)	3		10	1
39	2020-12-01 15:56:17.210529+00	4	BlogPhoto object (4)	1	[{"added": {}}]	10	1
40	2020-12-01 15:57:43.093059+00	5	BlogPhoto object (5)	1	[{"added": {}}]	10	1
41	2020-12-02 15:06:46.261829+00	57	Finanse osobiste według Kena i Barbie	3		8	1
42	2020-12-03 15:12:32.705778+00	11	Jak Oszczędzać Pieniądze	2	[{"changed": {"fields": ["Language"]}}]	7	1
43	2020-12-03 15:12:51.92571+00	8	Just Geek It	2	[{"changed": {"fields": ["Language"]}}]	7	1
44	2020-12-03 15:13:07.623615+00	8	Just Geek It	2	[{"changed": {"fields": ["Language"]}}]	7	1
45	2020-12-03 15:13:21.018734+00	11	Jak Oszczędzać Pieniądze	2	[{"changed": {"fields": ["Language"]}}]	7	1
46	2020-12-03 15:21:05.184664+00	52	Trading for a living subscribed by 123	1	[{"added": {}}]	9	1
47	2020-12-03 15:25:45.743673+00	4	123	2	[{"changed": {"fields": ["password"]}}]	4	1
48	2020-12-05 12:14:17.839032+00	89	Co sprawiło, że giełdę traktuje się jak kasyno?	3		8	1
49	2020-12-05 12:14:18.078248+00	89	Co sprawiło, że giełdę traktuje się jak kasyno?	3		8	1
50	2020-12-05 12:14:18.335838+00	88	Co sprawiło, że giełdę traktuje się jak kasyno?	3		8	1
51	2020-12-05 12:14:18.551483+00	88	Co sprawiło, że giełdę traktuje się jak kasyno?	3		8	1
52	2020-12-05 12:14:18.745891+00	87	Co sprawiło, że giełdę traktuje się jak kasyno?	3		8	1
53	2020-12-05 12:14:19.050023+00	87	Co sprawiło, że giełdę traktuje się jak kasyno?	3		8	1
54	2020-12-05 12:14:19.266459+00	85	Verisk Analytics (VRSK)	3		8	1
55	2020-12-05 12:14:19.449061+00	85	Verisk Analytics (VRSK)	3		8	1
56	2020-12-05 12:14:19.466252+00	84	Verisk Analytics (VRSK)	3		8	1
57	2020-12-05 12:14:19.482936+00	84	Verisk Analytics (VRSK)	3		8	1
58	2020-12-05 12:14:19.500276+00	83	Verisk Analytics (VRSK)	3		8	1
59	2020-12-05 12:14:19.516878+00	83	Verisk Analytics (VRSK)	3		8	1
60	2020-12-05 12:14:19.53427+00	82	Verisk Analytics (VRSK)	3		8	1
61	2020-12-05 12:14:19.550824+00	82	Verisk Analytics (VRSK)	3		8	1
62	2020-12-05 12:14:19.568223+00	81	Verisk Analytics (VRSK)	3		8	1
63	2020-12-05 12:14:19.584814+00	81	Verisk Analytics (VRSK)	3		8	1
64	2020-12-07 15:23:54.099075+00	2	Pamiętnik Giełdowy	2	[]	7	1
65	2020-12-07 16:39:54.092781+00	6	BlogPhoto object (6)	1	[{"added": {}}]	10	1
66	2020-12-07 16:40:49.801002+00	7	BlogPhoto object (7)	1	[{"added": {}}]	10	1
67	2020-12-07 16:43:06.999518+00	8	BlogPhoto object (8)	1	[{"added": {}}]	10	1
68	2020-12-07 16:45:11.599558+00	9	BlogPhoto object (9)	1	[{"added": {}}]	10	1
69	2020-12-07 16:46:45.740702+00	10	BlogPhoto object (10)	1	[{"added": {}}]	10	1
70	2020-12-07 16:47:30.636302+00	11	BlogPhoto object (11)	1	[{"added": {}}]	10	1
71	2020-12-07 16:48:15.690252+00	12	BlogPhoto object (12)	1	[{"added": {}}]	10	1
72	2020-12-08 15:48:20.567081+00	12	Problemy Polskiej Branży IT	1	[{"added": {}}]	7	1
73	2020-12-09 19:44:06.154629+00	2	BlogPostOpened object (2)	3		11	1
74	2020-12-13 08:46:39.461199+00	13	Sunscrapers Python	1	[{"added": {}}]	7	1
75	2020-12-13 08:47:15.187901+00	14	Sunscrapers Web Development	1	[{"added": {}}]	7	1
76	2020-12-28 09:00:12.64508+00	15	Niebezpiecznik	1	[{"added": {}}]	7	1
77	2020-12-30 09:29:38.289671+00	16	Finax	1	[{"added": {}}]	7	1
78	2020-12-30 09:31:21.410497+00	202	Trochę literatury nt. zmienności	3		8	1
79	2021-01-02 14:01:47.204689+00	208	Co wydarzyło się w 2020 roku? Zestawienie newsów technologicznych	3		8	1
80	2021-01-13 08:02:03.538665+00	17	Tawcan	1	[{"added": {}}]	7	1
\.


--
-- Data for Name: django_content_type; Type: TABLE DATA; Schema: public; Owner: adam
--

COPY public.django_content_type (id, app_label, model) FROM stdin;
1	admin	logentry
2	auth	permission
3	auth	group
4	auth	user
5	contenttypes	contenttype
6	sessions	session
7	blogs	blog
8	blogs	blogpost
9	blogs	blogphoto
10	users	blogsubscriber
11	users	blogpostopened
12	users	userlog
\.


--
-- Data for Name: django_migrations; Type: TABLE DATA; Schema: public; Owner: adam
--

COPY public.django_migrations (id, app, name, applied) FROM stdin;
1	contenttypes	0001_initial	2021-01-13 09:11:36.412736+00
2	auth	0001_initial	2021-01-13 09:11:38.964598+00
3	admin	0001_initial	2021-01-13 09:11:40.641569+00
4	admin	0002_logentry_remove_auto_add	2021-01-13 09:11:40.894356+00
5	admin	0003_logentry_add_action_flag_choices	2021-01-13 09:11:40.921812+00
6	contenttypes	0002_remove_content_type_name	2021-01-13 09:11:41.041053+00
7	auth	0002_alter_permission_name_max_length	2021-01-13 09:11:41.135578+00
8	auth	0003_alter_user_email_max_length	2021-01-13 09:11:41.378011+00
9	auth	0004_alter_user_username_opts	2021-01-13 09:11:41.973943+00
10	auth	0005_alter_user_last_login_null	2021-01-13 09:11:42.048433+00
11	auth	0006_require_contenttypes_0002	2021-01-13 09:11:42.096659+00
12	auth	0007_alter_validators_add_error_messages	2021-01-13 09:11:42.140034+00
13	auth	0008_alter_user_username_max_length	2021-01-13 09:11:42.321101+00
14	auth	0009_alter_user_last_name_max_length	2021-01-13 09:11:42.381057+00
15	auth	0010_alter_group_name_max_length	2021-01-13 09:11:42.413343+00
16	auth	0011_update_proxy_permissions	2021-01-13 09:11:42.440611+00
17	auth	0012_alter_user_first_name_max_length	2021-01-13 09:11:42.484221+00
18	blogs	0001_initial	2021-01-13 09:11:42.627019+00
19	blogs	0002_auto_20201014_1545	2021-01-13 09:11:42.660049+00
20	blogs	0003_blogpost	2021-01-13 09:11:42.752056+00
21	blogs	0004_auto_20201107_0948	2021-01-13 09:11:42.899025+00
22	blogs	0005_blog_icon	2021-01-13 09:11:42.937736+00
23	blogs	0006_remove_blog_icon	2021-01-13 09:11:42.974776+00
24	blogs	0007_blogphoto	2021-01-13 09:11:43.06185+00
25	blogs	0008_auto_20201209_1508	2021-01-13 09:11:43.176513+00
26	blogs	0009_remove_blogpost_opened	2021-01-13 09:11:43.215329+00
27	sessions	0001_initial	2021-01-13 09:11:43.376424+00
28	users	0001_initial	2021-01-13 09:11:43.621929+00
29	users	0002_blogpostopened	2021-01-13 09:11:44.698041+00
30	users	0003_blogpostopened_date	2021-01-13 09:11:45.788632+00
31	users	0004_userlog	2021-01-13 09:11:45.972881+00
\.


--
-- Data for Name: django_session; Type: TABLE DATA; Schema: public; Owner: adam
--

COPY public.django_session (session_key, session_data, expire_date) FROM stdin;
0hvyth70bmhetpibklz1rkakq80gb004	.eJxVjLsOwjAMAP8lM4ryKHHLyM43RI7tkAJKpaadEP-OInWA9e50bxVx30rcm6xxZnVRVp1-WUJ6Su2CH1jvi6albuucdE_0YZu-LSyv69H-DQq20rch-xFlcoYseXKGM5BFSQA4mMCjCZLYM2aYXMqW0GcmhDMMyEikPl8BVzlp:1kXQAs:qGsCYcLJogphpORXgqcIQOYg71FhI32UIJHl_FSEE0M	2020-11-10 14:42:10.747+00
36nbt9eqgmp7lktyyk8l8j6uz870qxzn	.eJxVjLsOwjAMAP8lM4ryKHHLyM43RI7tkAJKpaadEP-OInWA9e50bxVx30rcm6xxZnVRVp1-WUJ6Su2CH1jvi6albuucdE_0YZu-LSyv69H-DQq20rch-xFlcoYseXKGM5BFSQA4mMCjCZLYM2aYXMqW0GcmhDMMyEikPl8BVzlp:1kb4Ds:WlP8RO2CLx8xFFyJJzsr3LsCjFY2iz0DkuRZuWt4K9M	2020-11-20 16:04:20.507+00
3w3jciltq3tqplttyhi6ea4str4uuypi	.eJxVjLsOwjAMAP8lM4ryKHHLyM43RI7tkAJKpaadEP-OInWA9e50bxVx30rcm6xxZnVRVp1-WUJ6Su2CH1jvi6albuucdE_0YZu-LSyv69H-DQq20rch-xFlcoYseXKGM5BFSQA4mMCjCZLYM2aYXMqW0GcmhDMMyEikPl8BVzlp:1kXo3Z:0WmiYogFcXbqnfkmP23EqDzO-3rGO0wvi2nMcEhtSSQ	2020-11-11 16:12:13.322+00
6fc3d0fftmgapi95a0aryvpvkkyb1qph	.eJxVjLsOwjAMAP8lM4ryKHHLyM43RI7tkAJKpaadEP-OInWA9e50bxVx30rcm6xxZnVRVp1-WUJ6Su2CH1jvi6albuucdE_0YZu-LSyv69H-DQq20rch-xFlcoYseXKGM5BFSQA4mMCjCZLYM2aYXMqW0GcmhDMMyEikPl8BVzlp:1kc8Kk:3BpIc9EEac5gKtr5BzK1__XhslMKCMF0hEmReEes114	2020-11-23 14:39:50.791+00
6m2utacijnzirfc981iui8ghzad05cvx	.eJxVjLsOwjAMAP8lM4ryKHHLyM43RI7tkAJKpaadEP-OInWA9e50bxVx30rcm6xxZnVRVp1-WUJ6Su2CH1jvi6albuucdE_0YZu-LSyv69H-DQq20rch-xFlcoYseXKGM5BFSQA4mMCjCZLYM2aYXMqW0GcmhDMMyEikPl8BVzlp:1kdFB7:2wObvXka6r303OX5_iczTWk_N2zJOBMf8-JMBUvmzPI	2020-11-26 16:10:29.025+00
85kj5yhcwtqx3b50v72zzuypoa4sok5g	.eJxVjLsOwjAMAP8lM4ryKHHLyM43RI7tkAJKpaadEP-OInWA9e50bxVx30rcm6xxZnVRVp1-WUJ6Su2CH1jvi6albuucdE_0YZu-LSyv69H-DQq20rch-xFlcoYseXKGM5BFSQA4mMCjCZLYM2aYXMqW0GcmhDMMyEikPl8BVzlp:1kfPAh:XOdIGIfaFHJJ7GUUa3pqyzSag-vEn8TBTp0NKmZNVfU	2020-12-02 15:14:59.803+00
bgk1cud19h4nt6o4rh53om0zytpy1eti	.eJxVjLsOwjAMAP8lM4ryKHHLyM43RI7tkAJKpaadEP-OInWA9e50bxVx30rcm6xxZnVRVp1-WUJ6Su2CH1jvi6albuucdE_0YZu-LSyv69H-DQq20rch-xFlcoYseXKGM5BFSQA4mMCjCZLYM2aYXMqW0GcmhDMMyEikPl8BVzlp:1kZBZR:8Xuk-kUiGwAyG3sCVsiEGRu1PGBAKd7zKA6CCuPyeUU	2020-11-15 11:30:49.643+00
ch61b12s98763sr38gk2qek3hmddtnhn	.eJxVjLsOwjAMAP8lM4ryKHHLyM43RI7tkAJKpaadEP-OInWA9e50bxVx30rcm6xxZnVRVp1-WUJ6Su2CH1jvi6albuucdE_0YZu-LSyv69H-DQq20rch-xFlcoYseXKGM5BFSQA4mMCjCZLYM2aYXMqW0GcmhDMMyEikPl8BVzlp:1kSiom:Qm1C3qXicpaB08W--90vnkN_HUhmeiYfsXf6345Th2A	2020-10-28 15:35:56.803+00
hbn3phibh3j32qrqvk7wi80r5nem9az6	.eJxVjLsOwjAMAP8lM4ryKHHLyM43RI7tkAJKpaadEP-OInWA9e50bxVx30rcm6xxZnVRVp1-WUJ6Su2CH1jvi6albuucdE_0YZu-LSyv69H-DQq20rch-xFlcoYseXKGM5BFSQA4mMCjCZLYM2aYXMqW0GcmhDMMyEikPl8BVzlp:1kWN8e:7FvlBKNH-z5vB1M1PgNGKbdbBMDQte5bdLNHgDKGQhU	2020-11-07 17:15:32.438+00
iiglrgdn8p0ijgz41s47cpxuvy86f3pt	.eJxVjLsOwjAMAP8lM4ryKHHLyM43RI7tkAJKpaadEP-OInWA9e50bxVx30rcm6xxZnVRVp1-WUJ6Su2CH1jvi6albuucdE_0YZu-LSyv69H-DQq20rch-xFlcoYseXKGM5BFSQA4mMCjCZLYM2aYXMqW0GcmhDMMyEikPl8BVzlp:1kZcG4:Y808wGMKAYguDN6XW4CtSPm6aFvTO4s6DshkxxDEzzE	2020-11-16 16:00:36.127+00
m97oguu4ztlw0yf7oh99zg0hyf596s6j	.eJxVjLsOwjAMAP8lM4ryKHHLyM43RI7tkAJKpaadEP-OInWA9e50bxVx30rcm6xxZnVRVp1-WUJ6Su2CH1jvi6albuucdE_0YZu-LSyv69H-DQq20rch-xFlcoYseXKGM5BFSQA4mMCjCZLYM2aYXMqW0GcmhDMMyEikPl8BVzlp:1kTj4c:R_MDqLyhVvJkkuStJxpROEeY-5Xe51pWaJkBvrr966s	2020-10-31 10:04:26.663+00
n6bt3mgsiuo1aisany7ol2hy9742nxkl	.eJxVjLsOwjAMAP8lM4ryKHHLyM43RI7tkAJKpaadEP-OInWA9e50bxVx30rcm6xxZnVRVp1-WUJ6Su2CH1jvi6albuucdE_0YZu-LSyv69H-DQq20rch-xFlcoYseXKGM5BFSQA4mMCjCZLYM2aYXMqW0GcmhDMMyEikPl8BVzlp:1kahDg:plUbRZjSyw0qVCM1idZcOLWXaJucyREIvSGSXXaaRCQ	2020-11-19 15:30:36.764+00
p7icglb61bpqb8tm1387ymjxa0uvwmlw	.eJxVjLsOwjAMAP8lM4ryKHHLyM43RI7tkAJKpaadEP-OInWA9e50bxVx30rcm6xxZnVRVp1-WUJ6Su2CH1jvi6albuucdE_0YZu-LSyv69H-DQq20rch-xFlcoYseXKGM5BFSQA4mMCjCZLYM2aYXMqW0GcmhDMMyEikPl8BVzlp:1kdsmn:F4ywd3HactCnNgd5NV2SIcEn9qJnMOdalaOt__DGu_o	2020-11-28 10:28:01.716+00
p8m2h2smik205a4l2124o7u3h0i2r8p8	.eJxVjLsOwjAMAP8lM4ryKHHLyM43RI7tkAJKpaadEP-OInWA9e50bxVx30rcm6xxZnVRVp1-WUJ6Su2CH1jvi6albuucdE_0YZu-LSyv69H-DQq20rch-xFlcoYseXKGM5BFSQA4mMCjCZLYM2aYXMqW0GcmhDMMyEikPl8BVzlp:1kegTg:3RqIujAYeUG67h7UgaEm5101iY12aoxDsfj1I4448qY	2020-11-30 15:31:36.371+00
sxteqo4iwxp2i18h7ggw5afuek22d37p	.eJxVjLsOwjAMAP8lM4ryKHHLyM43RI7tkAJKpaadEP-OInWA9e50bxVx30rcm6xxZnVRVp1-WUJ6Su2CH1jvi6albuucdE_0YZu-LSyv69H-DQq20rch-xFlcoYseXKGM5BFSQA4mMCjCZLYM2aYXMqW0GcmhDMMyEikPl8BVzlp:1kYA9E:Bcz46d3p5dAkF3bcPW2w_pye-TB2EP0g-coUWGNZLX4	2020-11-12 15:47:32.475+00
ufibc7muwmpufzn5w0nu6cgr3zf60m1j	.eJxVjLsOwjAMAP8lM4ryKHHLyM43RI7tkAJKpaadEP-OInWA9e50bxVx30rcm6xxZnVRVp1-WUJ6Su2CH1jvi6albuucdE_0YZu-LSyv69H-DQq20rch-xFlcoYseXKGM5BFSQA4mMCjCZLYM2aYXMqW0GcmhDMMyEikPl8BVzlp:1kZyXK:MUUe3xrzupmpfLHXlys11Xf4DVoUJTNt_viqwxTV1xo	2020-11-17 15:47:54.063+00
y2skiv74s86azfwmmzzagczme2te2akg	.eJxVjLsOwjAMAP8lM4ryKHHLyM43RI7tkAJKpaadEP-OInWA9e50bxVx30rcm6xxZnVRVp1-WUJ6Su2CH1jvi6albuucdE_0YZu-LSyv69H-DQq20rch-xFlcoYseXKGM5BFSQA4mMCjCZLYM2aYXMqW0GcmhDMMyEikPl8BVzlp:1kUuC7:kngNxiqHT6P5nDaee2tZhwckYEPOYJsW101UWzRM00g	2020-11-03 16:09:03.759+00
slg3zi19z4pu3twmc61n77l8nnokaq0k	.eJxVjLsOwjAMAP8lM4ryKHHLyM43RI7tkAJKpaadEP-OInWA9e50bxVx30rcm6xxZnVRVp1-WUJ6Su2CH1jvi6albuucdE_0YZu-LSyv69H-DQq20rch-xFlcoYseXKGM5BFSQA4mMCjCZLYM2aYXMqW0GcmhDMMyEikPl8BVzlp:1kj2dD:BD19JeTVwiQpiKEneTwxZpd2t5VEwrugyHc6k9HmvbI	2020-12-12 15:59:27.820349+00
paz5mgrw516bl41vpbyyo1u85lghrp9b	.eJxVjLsOwjAMAP8lM4ryKHHLyM43RI7tkAJKpaadEP-OInWA9e50bxVx30rcm6xxZnVRVp1-WUJ6Su2CH1jvi6albuucdE_0YZu-LSyv69H-DQq20rch-xFlcoYseXKGM5BFSQA4mMCjCZLYM2aYXMqW0GcmhDMMyEikPl8BVzlp:1kjkbI:nYez_rMGxIqyox0PMKW04Ofl0HGzpbUtom7uUByASqI	2020-12-14 14:56:24.768393+00
f01jlinqy4jq626o6d9w0nfspqfbieqs	.eJxVjLsOwjAMAP8lM4ryKHHLyM43RI7tkAJKpaadEP-OInWA9e50bxVx30rcm6xxZnVRVp1-WUJ6Su2CH1jvi6albuucdE_0YZu-LSyv69H-DQq20rch-xFlcoYseXKGM5BFSQA4mMCjCZLYM2aYXMqW0GcmhDMMyEikPl8BVzlp:1kk7SX:mGtwbj1PUhMMElVig2v611blD4of0NH8il2uC5n5VWU	2020-12-15 15:20:53.121209+00
ifw311au5e9zauzh41tpoi8dg51addpr	.eJxVjLsOwjAMAP8lM4ryKHHLyM43RI7tkAJKpaadEP-OInWA9e50bxVx30rcm6xxZnVRVp1-WUJ6Su2CH1jvi6albuucdE_0YZu-LSyv69H-DQq20rch-xFlcoYseXKGM5BFSQA4mMCjCZLYM2aYXMqW0GcmhDMMyEikPl8BVzlp:1kkTi4:YAH6BE9VCqAPCZATqyoDzIyHuRDB4Seo2nH4lV0pf94	2020-12-16 15:06:24.747817+00
qejmkef11rqemipdqhgwm9mig4xuhuvw	.eJxVjLsOwjAMAP8lM4ryKHHLyM43RI7tkAJKpaadEP-OInWA9e50bxVx30rcm6xxZnVRVp1-WUJ6Su2CH1jvi6albuucdE_0YZu-LSyv69H-DQq20rch-xFlcoYseXKGM5BFSQA4mMCjCZLYM2aYXMqW0GcmhDMMyEikPl8BVzlp:1kkqTC:f4lj1dKrAWBbOYKnVhaYIvSzdV52p8KRRToE_p2_Ko8	2020-12-17 15:24:34.474027+00
s8k3kzmutx1yowc8b8z6bpplmlsjhinf	.eJxVjEEOwiAQRe_C2hCgTKUu3fcMzQwzSNVAUtqV8e7apAvd_vfef6kJtzVPW5NlmlldVK9OvxthfEjZAd-x3KqOtazLTHpX9EGbHivL83q4fwcZW_7WNmFw3jJ0CQQNgDC61BFB6JCQe2AaBhfIOYpIZFPyAs4aY2M6i1fvDwYRONY:1kkqWX:aXXJpkIrPi8dnHhhAtBzTn3AdTNIbb1lJJS8YDv0Cag	2020-12-17 15:28:01.021381+00
a091zewdrv86kyohjlvklaqig9vtj47q	.eJxVjLsOwjAMAP8lM4ryKHHLyM43RI7tkAJKpaadEP-OInWA9e50bxVx30rcm6xxZnVRVp1-WUJ6Su2CH1jvi6albuucdE_0YZu-LSyv69H-DQq20rch-xFlcoYseXKGM5BFSQA4mMCjCZLYM2aYXMqW0GcmhDMMyEikPl8BVzlp:1klWRi:PkbsyeEDdY81vhMpxMNMRbAp0ZLpxlmE7iKZDwPYlL0	2020-12-19 12:13:50.94088+00
3gu5bdeg9x6n8xxc4qshpo1twr80lyv9	.eJxVjLsOwjAMAP8lM4ryKHHLyM43RI7tkAJKpaadEP-OInWA9e50bxVx30rcm6xxZnVRVp1-WUJ6Su2CH1jvi6albuucdE_0YZu-LSyv69H-DQq20rch-xFlcoYseXKGM5BFSQA4mMCjCZLYM2aYXMqW0GcmhDMMyEikPl8BVzlp:1kmI5q:NKlGzCexr03eW8KH78hg6ggOizxH-zydp7QNKpw_Os0	2020-12-21 15:06:26.649113+00
cmjwi96l7smqawvcz8jwz326axi5m3vu	.eJxVjLsOwjAMAP8lM4ryKHHLyM43RI7tkAJKpaadEP-OInWA9e50bxVx30rcm6xxZnVRVp1-WUJ6Su2CH1jvi6albuucdE_0YZu-LSyv69H-DQq20rch-xFlcoYseXKGM5BFSQA4mMCjCZLYM2aYXMqW0GcmhDMMyEikPl8BVzlp:1kmIUS:ZnoFgqQGl_ZLDZfBonPLVrNPn--_m6fK_ELlolj0Mo8	2020-12-21 15:31:52.642935+00
1hqzkvnvqeu5dgn5l9fs5myagnztcmgh	.eJxVjLsOwjAMAP8lM4ryKHHLyM43RI7tkAJKpaadEP-OInWA9e50bxVx30rcm6xxZnVRVp1-WUJ6Su2CH1jvi6albuucdE_0YZu-LSyv69H-DQq20rch-xFlcoYseXKGM5BFSQA4mMCjCZLYM2aYXMqW0GcmhDMMyEikPl8BVzlp:1kme3I:4HWLrihnG9x1AXTVZ7PY0wyqABgdK17n79lMHiOovm8	2020-12-22 14:33:16.709148+00
i7wb70838937y9f9r5sbex147jx1wp35	.eJxVjLsOwjAMAP8lM4ryKHHLyM43RI7tkAJKpaadEP-OInWA9e50bxVx30rcm6xxZnVRVp1-WUJ6Su2CH1jvi6albuucdE_0YZu-LSyv69H-DQq20rch-xFlcoYseXKGM5BFSQA4mMCjCZLYM2aYXMqW0GcmhDMMyEikPl8BVzlp:1kn2A3:8uisVWwWe3AOt4nMt5HmHwTsvGUJE8EU9nyNwyKmNFo	2020-12-23 16:17:51.987331+00
obv7kswq3f7ku3y7zyroji99lp83mpq9	.eJxVjLsOwjAMAP8lM4ryKHHLyM43RI7tkAJKpaadEP-OInWA9e50bxVx30rcm6xxZnVRVp1-WUJ6Su2CH1jvi6albuucdE_0YZu-LSyv69H-DQq20rch-xFlcoYseXKGM5BFSQA4mMCjCZLYM2aYXMqW0GcmhDMMyEikPl8BVzlp:1ko1Qm:1l2WX_nyWhkiwE6gtTKBrUTbD8UooIEDZNeT5cuFNk0	2020-12-26 09:43:12.781554+00
d37xkcdbg1pstizkypfxr7fn4gkaxh70	.eJxVjLsOwjAMAP8lM4ryKHHLyM43RI7tkAJKpaadEP-OInWA9e50bxVx30rcm6xxZnVRVp1-WUJ6Su2CH1jvi6albuucdE_0YZu-LSyv69H-DQq20rch-xFlcoYseXKGM5BFSQA4mMCjCZLYM2aYXMqW0GcmhDMMyEikPl8BVzlp:1kopaN:_FdHXPKee5mU6NM5h9dPlXvAySG3-_Mf-VYhdd622Tg	2020-12-28 15:16:27.535769+00
uq9ru8p43haas6cldarkno2aa5si9c5k	.eJxVjLsOwjAMAP8lM4ryKHHLyM43RI7tkAJKpaadEP-OInWA9e50bxVx30rcm6xxZnVRVp1-WUJ6Su2CH1jvi6albuucdE_0YZu-LSyv69H-DQq20rch-xFlcoYseXKGM5BFSQA4mMCjCZLYM2aYXMqW0GcmhDMMyEikPl8BVzlp:1krMik:c3NBFcQ40qODPFwTJQhdwxPJS2Ayo2UxWqzCIT_aiPw	2021-01-04 15:03:34.180977+00
0rvkbmj600b2umdlj4j38yl6su3qg52k	.eJxVjLsOwjAMAP8lM4ryKHHLyM43RI7tkAJKpaadEP-OInWA9e50bxVx30rcm6xxZnVRVp1-WUJ6Su2CH1jvi6albuucdE_0YZu-LSyv69H-DQq20rch-xFlcoYseXKGM5BFSQA4mMCjCZLYM2aYXMqW0GcmhDMMyEikPl8BVzlp:1ktoNC:2F4mAM5aTPtTdCOhjeJ2JNslwMdyas6DUVz6c50jueA	2021-01-11 08:59:26.444767+00
o4k6txnnno4o6qedey9l9rhrump4uc0g	.eJxVjLsOwjAMAP8lM4ryKHHLyM43RI7tkAJKpaadEP-OInWA9e50bxVx30rcm6xxZnVRVp1-WUJ6Su2CH1jvi6albuucdE_0YZu-LSyv69H-DQq20rch-xFlcoYseXKGM5BFSQA4mMCjCZLYM2aYXMqW0GcmhDMMyEikPl8BVzlp:1kuXmi:izcbAaXw0MJxK0OckJQEn-J0cCaBPk9uol-EDRLOvRc	2021-01-13 09:28:48.515642+00
zoldu4dkszrthky6i1xopxszst8ou88o	.eJxVjLsOwjAMAP8lM4ryKHHLyM43RI7tkAJKpaadEP-OInWA9e50bxVx30rcm6xxZnVRVp1-WUJ6Su2CH1jvi6albuucdE_0YZu-LSyv69H-DQq20rch-xFlcoYseXKGM5BFSQA4mMCjCZLYM2aYXMqW0GcmhDMMyEikPl8BVzlp:1kwndy:dSGavzB869hoiAyGxbGP7jRa4FShKLcYv2yQoAv4zsY	2021-01-19 14:49:06.800874+00
9i7hq8nabd66bf575w1nfhllww41beuk	.eJxVjLsOwjAMAP8lM4ryKHHLyM43RI7tkAJKpaadEP-OInWA9e50bxVx30rcm6xxZnVRVp1-WUJ6Su2CH1jvi6albuucdE_0YZu-LSyv69H-DQq20rch-xFlcoYseXKGM5BFSQA4mMCjCZLYM2aYXMqW0GcmhDMMyEikPl8BVzlp:1kzb5Z:_WWC8-riASkIYJzS3B91GRSCxDH5uIYkN9B0aQfAvOc	2021-01-27 08:01:09.235622+00
\.


--
-- Data for Name: users_blogpostopened; Type: TABLE DATA; Schema: public; Owner: adam
--

COPY public.users_blogpostopened (id, opened, blog_post_id, user_id, date) FROM stdin;
3	t	101	1	2020-12-09 19:44:09.575652+00
4	t	101	1	2020-12-09 19:51:02.498173+00
5	t	103	1	2020-12-09 19:58:44.251646+00
6	t	103	1	2020-12-09 19:59:29.626234+00
7	t	155	1	2020-12-09 20:05:36.943278+00
8	t	97	1	2020-12-09 20:06:44.166808+00
9	t	103	1	2020-12-09 20:07:33.480522+00
10	t	102	1	2020-12-09 20:07:49.42006+00
11	t	104	1	2020-12-09 20:09:27.421083+00
12	t	99	1	2020-12-09 20:09:39.462931+00
13	t	157	1	2020-12-11 15:12:55.84361+00
14	t	157	1	2020-12-11 15:13:03.150173+00
15	t	160	1	2020-12-12 09:01:32.436738+00
16	t	161	1	2020-12-13 08:52:27.025842+00
17	t	166	1	2020-12-14 15:16:32.161046+00
18	t	189	1	2020-12-21 15:03:50.567731+00
19	t	185	1	2020-12-21 15:05:31.797568+00
20	t	193	1	2020-12-28 09:01:40.558653+00
21	t	203	1	2020-12-30 09:33:14.581293+00
22	t	211	1	2021-01-02 14:01:09.603336+00
23	t	210	1	2021-01-02 14:01:16.028561+00
24	t	207	1	2021-01-02 14:01:26.530446+00
25	t	209	1	2021-01-02 14:09:22.353033+00
26	t	212	1	2021-01-02 14:09:38.520309+00
27	t	214	1	2021-01-05 14:49:10.239883+00
28	t	209	1	2021-01-05 14:49:18.737163+00
\.


--
-- Data for Name: users_blogsubscriber; Type: TABLE DATA; Schema: public; Owner: adam
--

COPY public.users_blogsubscriber (id, date, email_notification, blog_id, user_id) FROM stdin;
29	2020-11-18 15:50:27.39+00	f	3	1
30	2020-11-18 15:51:53.135+00	f	2	1
31	2020-11-18 15:52:02.467+00	f	6	1
32	2020-11-18 15:52:05.564+00	f	7	1
35	2020-11-18 15:52:28.156+00	f	9	1
36	2020-11-18 15:52:37.925+00	f	5	1
39	2020-11-28 14:26:05.478545+00	f	8	1
47	2020-11-28 15:34:03.655385+00	f	4	1
49	2020-12-01 16:05:33.658051+00	f	11	1
50	2020-12-01 16:05:35.153692+00	f	10	1
52	2020-12-03 15:21:00+00	f	1	4
53	2020-12-03 15:26:17.63612+00	f	8	4
54	2020-12-08 15:49:23.470052+00	f	12	1
57	2020-12-09 15:48:21.129644+00	f	1	1
58	2020-12-09 16:02:46.917229+00	f	8	7
59	2020-12-13 08:48:28.212219+00	f	13	1
60	2020-12-13 08:48:29.883291+00	f	14	1
61	2020-12-28 09:01:18.818015+00	f	15	1
62	2020-12-30 09:30:24.579395+00	f	16	1
\.


--
-- Data for Name: users_userlog; Type: TABLE DATA; Schema: public; Owner: adam
--

COPY public.users_userlog (id, created, object_id, action, user_id) FROM stdin;
1	2021-01-13 08:01:09.124069+00	login	L	1
\.


--
-- Name: auth_group_id_seq; Type: SEQUENCE SET; Schema: public; Owner: adam
--

SELECT pg_catalog.setval('public.auth_group_id_seq', 1, false);


--
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: adam
--

SELECT pg_catalog.setval('public.auth_group_permissions_id_seq', 1, false);


--
-- Name: auth_permission_id_seq; Type: SEQUENCE SET; Schema: public; Owner: adam
--

SELECT pg_catalog.setval('public.auth_permission_id_seq', 44, true);


--
-- Name: auth_user_groups_id_seq; Type: SEQUENCE SET; Schema: public; Owner: adam
--

SELECT pg_catalog.setval('public.auth_user_groups_id_seq', 1, false);


--
-- Name: auth_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: adam
--

SELECT pg_catalog.setval('public.auth_user_id_seq', 7, true);


--
-- Name: auth_user_user_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: adam
--

SELECT pg_catalog.setval('public.auth_user_user_permissions_id_seq', 1, false);


--
-- Name: blogs_blog_id_seq; Type: SEQUENCE SET; Schema: public; Owner: adam
--

SELECT pg_catalog.setval('public.blogs_blog_id_seq', 17, true);


--
-- Name: blogs_blogphoto_id_seq; Type: SEQUENCE SET; Schema: public; Owner: adam
--

SELECT pg_catalog.setval('public.blogs_blogphoto_id_seq', 12, true);


--
-- Name: blogs_blogpost_id_seq; Type: SEQUENCE SET; Schema: public; Owner: adam
--

SELECT pg_catalog.setval('public.blogs_blogpost_id_seq', 234, true);


--
-- Name: django_admin_log_id_seq; Type: SEQUENCE SET; Schema: public; Owner: adam
--

SELECT pg_catalog.setval('public.django_admin_log_id_seq', 80, true);


--
-- Name: django_content_type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: adam
--

SELECT pg_catalog.setval('public.django_content_type_id_seq', 11, true);


--
-- Name: django_migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: adam
--

SELECT pg_catalog.setval('public.django_migrations_id_seq', 30, true);


--
-- Name: users_blogpostopened_id_seq; Type: SEQUENCE SET; Schema: public; Owner: adam
--

SELECT pg_catalog.setval('public.users_blogpostopened_id_seq', 28, true);


--
-- Name: users_blogsubscriber_id_seq; Type: SEQUENCE SET; Schema: public; Owner: adam
--

SELECT pg_catalog.setval('public.users_blogsubscriber_id_seq', 62, true);


--
-- Name: users_userlog_id_seq; Type: SEQUENCE SET; Schema: public; Owner: adam
--

SELECT pg_catalog.setval('public.users_userlog_id_seq', 1, true);


--
-- Name: auth_group auth_group_name_key; Type: CONSTRAINT; Schema: public; Owner: adam
--

ALTER TABLE ONLY public.auth_group
    ADD CONSTRAINT auth_group_name_key UNIQUE (name);


--
-- Name: auth_group_permissions auth_group_permissions_group_id_permission_id_0cd325b0_uniq; Type: CONSTRAINT; Schema: public; Owner: adam
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_group_id_permission_id_0cd325b0_uniq UNIQUE (group_id, permission_id);


--
-- Name: auth_group_permissions auth_group_permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: adam
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_pkey PRIMARY KEY (id);


--
-- Name: auth_group auth_group_pkey; Type: CONSTRAINT; Schema: public; Owner: adam
--

ALTER TABLE ONLY public.auth_group
    ADD CONSTRAINT auth_group_pkey PRIMARY KEY (id);


--
-- Name: auth_permission auth_permission_content_type_id_codename_01ab375a_uniq; Type: CONSTRAINT; Schema: public; Owner: adam
--

ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_content_type_id_codename_01ab375a_uniq UNIQUE (content_type_id, codename);


--
-- Name: auth_permission auth_permission_pkey; Type: CONSTRAINT; Schema: public; Owner: adam
--

ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_pkey PRIMARY KEY (id);


--
-- Name: auth_user_groups auth_user_groups_pkey; Type: CONSTRAINT; Schema: public; Owner: adam
--

ALTER TABLE ONLY public.auth_user_groups
    ADD CONSTRAINT auth_user_groups_pkey PRIMARY KEY (id);


--
-- Name: auth_user_groups auth_user_groups_user_id_group_id_94350c0c_uniq; Type: CONSTRAINT; Schema: public; Owner: adam
--

ALTER TABLE ONLY public.auth_user_groups
    ADD CONSTRAINT auth_user_groups_user_id_group_id_94350c0c_uniq UNIQUE (user_id, group_id);


--
-- Name: auth_user auth_user_pkey; Type: CONSTRAINT; Schema: public; Owner: adam
--

ALTER TABLE ONLY public.auth_user
    ADD CONSTRAINT auth_user_pkey PRIMARY KEY (id);


--
-- Name: auth_user_user_permissions auth_user_user_permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: adam
--

ALTER TABLE ONLY public.auth_user_user_permissions
    ADD CONSTRAINT auth_user_user_permissions_pkey PRIMARY KEY (id);


--
-- Name: auth_user_user_permissions auth_user_user_permissions_user_id_permission_id_14a6b632_uniq; Type: CONSTRAINT; Schema: public; Owner: adam
--

ALTER TABLE ONLY public.auth_user_user_permissions
    ADD CONSTRAINT auth_user_user_permissions_user_id_permission_id_14a6b632_uniq UNIQUE (user_id, permission_id);


--
-- Name: auth_user auth_user_username_key; Type: CONSTRAINT; Schema: public; Owner: adam
--

ALTER TABLE ONLY public.auth_user
    ADD CONSTRAINT auth_user_username_key UNIQUE (username);


--
-- Name: blogs_blog blogs_blog_pkey; Type: CONSTRAINT; Schema: public; Owner: adam
--

ALTER TABLE ONLY public.blogs_blog
    ADD CONSTRAINT blogs_blog_pkey PRIMARY KEY (id);


--
-- Name: blogs_blogphoto blogs_blogphoto_pkey; Type: CONSTRAINT; Schema: public; Owner: adam
--

ALTER TABLE ONLY public.blogs_blogphoto
    ADD CONSTRAINT blogs_blogphoto_pkey PRIMARY KEY (id);


--
-- Name: blogs_blogpost blogs_blogpost_pkey; Type: CONSTRAINT; Schema: public; Owner: adam
--

ALTER TABLE ONLY public.blogs_blogpost
    ADD CONSTRAINT blogs_blogpost_pkey PRIMARY KEY (id);


--
-- Name: django_admin_log django_admin_log_pkey; Type: CONSTRAINT; Schema: public; Owner: adam
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_pkey PRIMARY KEY (id);


--
-- Name: django_content_type django_content_type_app_label_model_76bd3d3b_uniq; Type: CONSTRAINT; Schema: public; Owner: adam
--

ALTER TABLE ONLY public.django_content_type
    ADD CONSTRAINT django_content_type_app_label_model_76bd3d3b_uniq UNIQUE (app_label, model);


--
-- Name: django_content_type django_content_type_pkey; Type: CONSTRAINT; Schema: public; Owner: adam
--

ALTER TABLE ONLY public.django_content_type
    ADD CONSTRAINT django_content_type_pkey PRIMARY KEY (id);


--
-- Name: django_migrations django_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: adam
--

ALTER TABLE ONLY public.django_migrations
    ADD CONSTRAINT django_migrations_pkey PRIMARY KEY (id);


--
-- Name: django_session django_session_pkey; Type: CONSTRAINT; Schema: public; Owner: adam
--

ALTER TABLE ONLY public.django_session
    ADD CONSTRAINT django_session_pkey PRIMARY KEY (session_key);


--
-- Name: users_blogpostopened users_blogpostopened_pkey; Type: CONSTRAINT; Schema: public; Owner: adam
--

ALTER TABLE ONLY public.users_blogpostopened
    ADD CONSTRAINT users_blogpostopened_pkey PRIMARY KEY (id);


--
-- Name: users_blogsubscriber users_blogsubscriber_pkey; Type: CONSTRAINT; Schema: public; Owner: adam
--

ALTER TABLE ONLY public.users_blogsubscriber
    ADD CONSTRAINT users_blogsubscriber_pkey PRIMARY KEY (id);


--
-- Name: users_userlog users_userlog_pkey; Type: CONSTRAINT; Schema: public; Owner: adam
--

ALTER TABLE ONLY public.users_userlog
    ADD CONSTRAINT users_userlog_pkey PRIMARY KEY (id);


--
-- Name: auth_group_name_a6ea08ec_like; Type: INDEX; Schema: public; Owner: adam
--

CREATE INDEX auth_group_name_a6ea08ec_like ON public.auth_group USING btree (name varchar_pattern_ops);


--
-- Name: auth_group_permissions_group_id_b120cbf9; Type: INDEX; Schema: public; Owner: adam
--

CREATE INDEX auth_group_permissions_group_id_b120cbf9 ON public.auth_group_permissions USING btree (group_id);


--
-- Name: auth_group_permissions_permission_id_84c5c92e; Type: INDEX; Schema: public; Owner: adam
--

CREATE INDEX auth_group_permissions_permission_id_84c5c92e ON public.auth_group_permissions USING btree (permission_id);


--
-- Name: auth_permission_content_type_id_2f476e4b; Type: INDEX; Schema: public; Owner: adam
--

CREATE INDEX auth_permission_content_type_id_2f476e4b ON public.auth_permission USING btree (content_type_id);


--
-- Name: auth_user_groups_group_id_97559544; Type: INDEX; Schema: public; Owner: adam
--

CREATE INDEX auth_user_groups_group_id_97559544 ON public.auth_user_groups USING btree (group_id);


--
-- Name: auth_user_groups_user_id_6a12ed8b; Type: INDEX; Schema: public; Owner: adam
--

CREATE INDEX auth_user_groups_user_id_6a12ed8b ON public.auth_user_groups USING btree (user_id);


--
-- Name: auth_user_user_permissions_permission_id_1fbb5f2c; Type: INDEX; Schema: public; Owner: adam
--

CREATE INDEX auth_user_user_permissions_permission_id_1fbb5f2c ON public.auth_user_user_permissions USING btree (permission_id);


--
-- Name: auth_user_user_permissions_user_id_a95ead1b; Type: INDEX; Schema: public; Owner: adam
--

CREATE INDEX auth_user_user_permissions_user_id_a95ead1b ON public.auth_user_user_permissions USING btree (user_id);


--
-- Name: auth_user_username_6821ab7c_like; Type: INDEX; Schema: public; Owner: adam
--

CREATE INDEX auth_user_username_6821ab7c_like ON public.auth_user USING btree (username varchar_pattern_ops);


--
-- Name: blogs_blogphoto_blog_id_77961046; Type: INDEX; Schema: public; Owner: adam
--

CREATE INDEX blogs_blogphoto_blog_id_77961046 ON public.blogs_blogphoto USING btree (blog_id);


--
-- Name: blogs_blogpost_blog_id_573c3ae1; Type: INDEX; Schema: public; Owner: adam
--

CREATE INDEX blogs_blogpost_blog_id_573c3ae1 ON public.blogs_blogpost USING btree (blog_id);


--
-- Name: django_admin_log_content_type_id_c4bce8eb; Type: INDEX; Schema: public; Owner: adam
--

CREATE INDEX django_admin_log_content_type_id_c4bce8eb ON public.django_admin_log USING btree (content_type_id);


--
-- Name: django_admin_log_user_id_c564eba6; Type: INDEX; Schema: public; Owner: adam
--

CREATE INDEX django_admin_log_user_id_c564eba6 ON public.django_admin_log USING btree (user_id);


--
-- Name: django_session_expire_date_a5c62663; Type: INDEX; Schema: public; Owner: adam
--

CREATE INDEX django_session_expire_date_a5c62663 ON public.django_session USING btree (expire_date);


--
-- Name: django_session_session_key_c0390e0f_like; Type: INDEX; Schema: public; Owner: adam
--

CREATE INDEX django_session_session_key_c0390e0f_like ON public.django_session USING btree (session_key varchar_pattern_ops);


--
-- Name: users_blogpostopened_blog_post_id_8813530e; Type: INDEX; Schema: public; Owner: adam
--

CREATE INDEX users_blogpostopened_blog_post_id_8813530e ON public.users_blogpostopened USING btree (blog_post_id);


--
-- Name: users_blogpostopened_user_id_0c583a23; Type: INDEX; Schema: public; Owner: adam
--

CREATE INDEX users_blogpostopened_user_id_0c583a23 ON public.users_blogpostopened USING btree (user_id);


--
-- Name: users_blogsubscriber_blog_id_358c36e6; Type: INDEX; Schema: public; Owner: adam
--

CREATE INDEX users_blogsubscriber_blog_id_358c36e6 ON public.users_blogsubscriber USING btree (blog_id);


--
-- Name: users_blogsubscriber_user_id_0136f9cf; Type: INDEX; Schema: public; Owner: adam
--

CREATE INDEX users_blogsubscriber_user_id_0136f9cf ON public.users_blogsubscriber USING btree (user_id);


--
-- Name: users_userlog_user_id_e0a11949; Type: INDEX; Schema: public; Owner: adam
--

CREATE INDEX users_userlog_user_id_e0a11949 ON public.users_userlog USING btree (user_id);


--
-- Name: auth_group_permissions auth_group_permissio_permission_id_84c5c92e_fk_auth_perm; Type: FK CONSTRAINT; Schema: public; Owner: adam
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissio_permission_id_84c5c92e_fk_auth_perm FOREIGN KEY (permission_id) REFERENCES public.auth_permission(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_group_permissions auth_group_permissions_group_id_b120cbf9_fk_auth_group_id; Type: FK CONSTRAINT; Schema: public; Owner: adam
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_group_id_b120cbf9_fk_auth_group_id FOREIGN KEY (group_id) REFERENCES public.auth_group(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_permission auth_permission_content_type_id_2f476e4b_fk_django_co; Type: FK CONSTRAINT; Schema: public; Owner: adam
--

ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_content_type_id_2f476e4b_fk_django_co FOREIGN KEY (content_type_id) REFERENCES public.django_content_type(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_user_groups auth_user_groups_group_id_97559544_fk_auth_group_id; Type: FK CONSTRAINT; Schema: public; Owner: adam
--

ALTER TABLE ONLY public.auth_user_groups
    ADD CONSTRAINT auth_user_groups_group_id_97559544_fk_auth_group_id FOREIGN KEY (group_id) REFERENCES public.auth_group(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_user_groups auth_user_groups_user_id_6a12ed8b_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: adam
--

ALTER TABLE ONLY public.auth_user_groups
    ADD CONSTRAINT auth_user_groups_user_id_6a12ed8b_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES public.auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_user_user_permissions auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm; Type: FK CONSTRAINT; Schema: public; Owner: adam
--

ALTER TABLE ONLY public.auth_user_user_permissions
    ADD CONSTRAINT auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm FOREIGN KEY (permission_id) REFERENCES public.auth_permission(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_user_user_permissions auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: adam
--

ALTER TABLE ONLY public.auth_user_user_permissions
    ADD CONSTRAINT auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES public.auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: blogs_blogphoto blogs_blogphoto_blog_id_77961046_fk_blogs_blog_id; Type: FK CONSTRAINT; Schema: public; Owner: adam
--

ALTER TABLE ONLY public.blogs_blogphoto
    ADD CONSTRAINT blogs_blogphoto_blog_id_77961046_fk_blogs_blog_id FOREIGN KEY (blog_id) REFERENCES public.blogs_blog(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: blogs_blogpost blogs_blogpost_blog_id_573c3ae1_fk_blogs_blog_id; Type: FK CONSTRAINT; Schema: public; Owner: adam
--

ALTER TABLE ONLY public.blogs_blogpost
    ADD CONSTRAINT blogs_blogpost_blog_id_573c3ae1_fk_blogs_blog_id FOREIGN KEY (blog_id) REFERENCES public.blogs_blog(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: django_admin_log django_admin_log_content_type_id_c4bce8eb_fk_django_co; Type: FK CONSTRAINT; Schema: public; Owner: adam
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_content_type_id_c4bce8eb_fk_django_co FOREIGN KEY (content_type_id) REFERENCES public.django_content_type(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: django_admin_log django_admin_log_user_id_c564eba6_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: adam
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_user_id_c564eba6_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES public.auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: users_blogpostopened users_blogpostopened_blog_post_id_8813530e_fk_blogs_blogpost_id; Type: FK CONSTRAINT; Schema: public; Owner: adam
--

ALTER TABLE ONLY public.users_blogpostopened
    ADD CONSTRAINT users_blogpostopened_blog_post_id_8813530e_fk_blogs_blogpost_id FOREIGN KEY (blog_post_id) REFERENCES public.blogs_blogpost(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: users_blogpostopened users_blogpostopened_user_id_0c583a23_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: adam
--

ALTER TABLE ONLY public.users_blogpostopened
    ADD CONSTRAINT users_blogpostopened_user_id_0c583a23_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES public.auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: users_blogsubscriber users_blogsubscriber_blog_id_358c36e6_fk_blogs_blog_id; Type: FK CONSTRAINT; Schema: public; Owner: adam
--

ALTER TABLE ONLY public.users_blogsubscriber
    ADD CONSTRAINT users_blogsubscriber_blog_id_358c36e6_fk_blogs_blog_id FOREIGN KEY (blog_id) REFERENCES public.blogs_blog(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: users_blogsubscriber users_blogsubscriber_user_id_0136f9cf_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: adam
--

ALTER TABLE ONLY public.users_blogsubscriber
    ADD CONSTRAINT users_blogsubscriber_user_id_0136f9cf_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES public.auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: users_userlog users_userlog_user_id_e0a11949_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: adam
--

ALTER TABLE ONLY public.users_userlog
    ADD CONSTRAINT users_userlog_user_id_e0a11949_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES public.auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- PostgreSQL database dump complete
--

--
-- Database "postgres" dump
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 13.1 (Debian 13.1-1.pgdg100+1)
-- Dumped by pg_dump version 13.1 (Debian 13.1-1.pgdg100+1)

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

DROP DATABASE postgres;
--
-- Name: postgres; Type: DATABASE; Schema: -; Owner: adam
--

CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.utf8';


ALTER DATABASE postgres OWNER TO adam;

\connect postgres

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

--
-- Name: DATABASE postgres; Type: COMMENT; Schema: -; Owner: adam
--

COMMENT ON DATABASE postgres IS 'default administrative connection database';


--
-- PostgreSQL database dump complete
--

--
-- PostgreSQL database cluster dump complete
--

